<?php

namespace Tests\Feature;

use App\Models\Lab;
use App\Models\User;
use Database\Seeders\DatabaseSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LabSpaceFoundationTest extends TestCase
{
    use RefreshDatabase;

    public function test_home_page_renders_building_j_labs_for_guests(): void
    {
        $this->seed(DatabaseSeeder::class);

        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertSee('LabSpace TI');
        $response->assertSee('J.2.1');
        $response->assertSee('J.2.4');
    }

    public function test_schedule_page_renders_seeded_labs_and_practicums_without_auth(): void
    {
        $this->seed(DatabaseSeeder::class);

        $response = $this->get('/schedule');

        $response->assertStatus(200);
        $response->assertSee('J.2.1');
        $response->assertSee('Framework Web Programming');
    }

    public function test_student_can_register_with_nim_and_redirects_to_schedule(): void
    {
        $response = $this->post('/register', [
            'name' => 'Tegar Saputra',
            'nim' => 'L200240092',
            'email' => 'l200240092@student.ums.ac.id',
            'password' => 'labspace123',
            'password_confirmation' => 'labspace123',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect('/schedule');

        $user = User::where('email', 'l200240092@student.ums.ac.id')->firstOrFail();
        $this->assertSame('L200240092', $user->nim);
        $this->assertSame('mahasiswa', $user->role);
    }

    public function test_student_can_sign_in_using_nim_and_is_blocked_from_console(): void
    {
        $this->seed(DatabaseSeeder::class);

        $login = $this->post('/login', [
            'email' => 'L200240081',
            'password' => 'labspace123',
        ]);

        $this->assertAuthenticated();
        $login->assertRedirect('/schedule');

        $this->get('/console')->assertStatus(403);
    }

    public function test_laboran_redirects_to_console_and_can_access_console(): void
    {
        $this->seed(DatabaseSeeder::class);

        $login = $this->post('/login', [
            'email' => 'laboran@ums.ac.id',
            'password' => 'labspace123',
        ]);

        $this->assertAuthenticated();
        $login->assertRedirect('/console');

        $this->get('/console')->assertStatus(200);
    }

    public function test_locale_switcher_toggles_between_en_and_id(): void
    {
        $this->seed(DatabaseSeeder::class);

        $this->get('/locale/id')->assertRedirect();
        $this->get('/')->assertSee('Masuk / Daftar');

        $this->get('/locale/en')->assertRedirect();
        $this->get('/')->assertSee('Sign In / Register');
    }

    public function test_eloquent_models_preserve_four_core_tables_relationships(): void
    {
        $this->seed(DatabaseSeeder::class);

        $lab = Lab::where('kode_lab', 'J.2.1')->firstOrFail();
        $this->assertGreaterThan(0, $lab->jadwalRutin()->count());
        $this->assertGreaterThan(0, $lab->reservasis()->count());

        $student = User::where('nim', 'L200240081')->firstOrFail();
        $this->assertGreaterThan(0, $student->reservasis()->count());
    }

    public function test_duplicate_nim_case_insensitive_is_rejected_cleanly(): void
    {
        $this->seed(DatabaseSeeder::class);

        $response = $this->post('/register', [
            'name' => 'Duplicate Student',
            'nim' => 'l200240081',
            'email' => 'dup@student.ums.ac.id',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ]);

        $response->assertSessionHasErrors('nim');
        $this->assertGuest();
    }
}
