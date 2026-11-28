(() => {
  'use strict';

  const STORAGE_KEY = 'labspace_ums_v4';
  const THEME_KEY = 'labspace_ums_theme';

  const TIME_SLOTS = [
    { start: '07:00', end: '09:00' },
    { start: '09:00', end: '11:00' },
    { start: '11:00', end: '13:00' },
    { start: '13:00', end: '15:00' },
    { start: '15:00', end: '17:00' },
    { start: '17:00', end: '19:00' },
    { start: '19:00', end: '21:00' }
  ];

  const TIME_OPTIONS = [
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
    '19:00', '20:00', '21:00'
  ];

  const I18N = {
    en: {
      skip_content: 'Skip to main content',
      brand_sub: 'Building J FKI UMS',
      nav_overview: 'Overview',
      nav_availability: 'Lab Availability',
      nav_book: 'Book a Lab',
      nav_my_bookings: 'My Bookings',
      nav_finder: 'Smart Slot Finder',
      nav_labs_dir: 'Lab Info & Practicum',
      nav_tickets: 'E-Ticket Wallet',
      nav_admin: 'Admin Center',
      cf_group_student_tools: 'Student Tools',
      finder_lbl_date: 'Target Date',
      finder_lbl_dur: 'Needed Duration',
      finder_dur_1: '1 Hour',
      finder_dur_2: '2 Hours',
      finder_dur_3: '3 Hours',
      finder_lbl_pcs: 'Min. PCs Needed',
      finder_lbl_tool: 'Software / Lab Filter',
      finder_ph_tool: 'e.g. Docker, Python, Figma, J.2.1',
      finder_empty_title: 'No consecutive free blocks found',
      finder_empty_desc: 'Try another date, shorter duration, or fewer required PCs.',
      labs_prac_title: 'Weekly Routine Practicum Timetable',
      labs_prac_sub: 'Regular lecture schedules occupy these hours automatically; choose free slots outside these windows.',
      col_time: 'Time',
      tickets_empty_title: 'No approved E-Tickets yet',
      tickets_empty_desc: 'Once your booking is approved by a Lab Technician, your scannable QR pass appears here automatically for fast key pickup.',
      nav_support: 'Support',
      support_tab_ai: 'Asisten AI',
      support_tab_cs: 'Chat CS / Lab Staff',
      ai_head_title: 'LabSpace AI',
      ai_head_desc: 'Asisten Cerdas · Gedung J',
      btn_clear_chat: 'Bersihkan Chat',
      ph_ai_input: 'Tanya lab yang kosong hari ini, spek PC, atau E-Tiket...',
      btn_send: 'Kirim',
      cs_head_title: 'Direct Chat with Building J Lab Staff (CS)',
      cs_head_desc: 'Handled by Informatics Laboratory Technicians during service hours (Mon - Sat, 07:30 - 17:00 WIB).',
      cs_online_badge: 'Desk Active',
      cs_topic_schedule: 'Schedule & Clash',
      cs_topic_ticket: 'E-Ticket & Key Pickup',
      cs_topic_account: 'Account / NIM Issue',
      cs_topic_facility: 'Lab PC & Software',
      ph_cs_input: 'Describe your issue to Lab Technician CS...',
      btn_send_cs: 'Send to CS',
      btn_menu: 'Menu',
      drawer_workspace: 'Workspace Menu',
      menu_edit_profile: 'Edit Profile & Password',
      profile_lbl_avatar: 'Character Avatar',
      profile_modal_title: 'Account Settings',
      profile_modal_sub: 'Manage your identity card, contact details, security, and preferences.',
      profile_tab_general: 'Profile',
      profile_tab_security: 'Security',
      profile_tab_prefs: 'Preferences',
      profile_lbl_prodi: 'Study Program / Unit',
      profile_ph_prodi: 'e.g., Informatics Engineering · 2024',
      profile_lbl_phone: 'WhatsApp / Contact',
      profile_ph_phone: '0812-3456-7890',
      lbl_nim_staff: 'NIM / Staff ID',
      lbl_email_ums: 'UMS Email',
      profile_hint_email: 'Use your official @student.ums.ac.id or @ums.ac.id address.',
      profile_security_note: 'Leave all password fields blank if you only want to update your profile info. Enter your current password to set a new one.',
      profile_lbl_curr_pass: 'Current Password',
      profile_ph_curr_pass: 'Enter current password',
      profile_lbl_new_pass: 'New Password',
      profile_lbl_confirm_pass: 'Confirm New Password',
      profile_ph_confirm_pass: 'Repeat new password',
      profile_pref_lang_title: 'Interface Language',
      profile_pref_lang_desc: 'Applies immediately to navigation, schedules, and permits.',
      profile_pref_theme_title: 'Appearance Theme',
      profile_pref_theme_desc: 'Choose between crisp daylight or dark workspace mode.',
      profile_theme_light: 'Light',
      profile_theme_dark: 'Dark',
      profile_pref_id_title: 'Quick Copy Student / Staff ID',
      profile_pref_id_desc: 'Copy your registered NIM or staff code for booking forms.',
      profile_btn_copy_id: 'Copy ID',
      btn_save_changes: 'Save Changes',
      ph_quick_search: 'Quick search...',
      cf_theme_short: 'Appearance',
      cf_group_workspace: 'Workspace',
      cf_group_admin: 'Admin Center',
      lbl_quick_reason: 'Quick Reason Template (Optional)',
      opt_custom_reason: '-- Custom / write note manually --',
      btn_sign_in: 'Sign In',
      btn_register: 'Register',
      btn_sign_out: 'Sign Out',
      notif_title: 'Notifications',
      notif_mark_read: 'Mark all read',
      notif_empty: 'No recent notifications yet.',
      menu_label: 'Menu',
      cta_request_lab: 'Request Lab Usage',
      hero_kicker: 'Informatics Engineering · Building J FKI UMS',
      hero_title: 'Real-time computer lab scheduling and booking for Building J.',
      hero_desc: 'Check empty rooms between regular practicum classes, avoid double-booked slots automatically, and obtain an official lab permit e-ticket in one place.',
      hero_cta_explore: 'Explore Lab Schedule',
      hero_cta_auth: 'Sign In / Register',
      hero_cta_dashboard: 'Go to Lab Schedule',
      stat_active_rooms: 'Operational Labs',
      stat_open_today: 'Open Slots Today',
      stat_hours: 'Operating Hours',
      hero_snapshot_label: 'LIVE SNAPSHOT · BUILDING J',
      hero_open_board: 'Open Full Board →',
      pinned_eyebrow: 'HOW LABSPACE WORKS',
      pinned_title: 'Four structured steps from checking empty rooms to key pickup.',
      pinned_lead: 'Built around real student and lab technician workflows so students never guess room availability and technicians never process clashing bookings.',
      step1_title: 'Check Live Availability',
      step1_desc: 'Browse daily 07:00 - 21:00 time slots and weekly overviews across rooms J.2.1 through J.2.4, including live hardware specs.',
      step2_title: 'Anti-Clash Reservation Form',
      step2_desc: 'Select an open slot and the engine immediately validates against routine practicums, maintenance status, room capacity, and active bookings.',
      step3_title: 'Lab Technician Verification',
      step3_desc: 'Building J lab staff review pending requests in a dedicated console with automatic re-validation before approval.',
      step4_title: 'Official E-Ticket & PDF Permit',
      step4_desc: 'Approved requests generate a printable UMS Informatics lab permit with ticket QR code for key pickup at the 2nd-floor technician room.',
      showcase_eyebrow: 'BUILDING J ROOMS',
      showcase_title: 'Four computer laboratories ready for coursework and group projects.',
      showcase_btn: 'View Interactive Schedule',
      cta_final_title: 'Ready to book a lab session in Building J?',
      cta_final_desc: 'Check live availability right now or sign in with your UMS student account to submit a request.',
      metric_total_labs: 'Total Labs',
      metric_open_slots: 'Open Slots (Date)',
      metric_open_note: 'Click green slot to book',
      metric_practicum: 'Routine Practicums',
      metric_practicum_note: 'Scheduled class sessions',
      metric_booked: 'Active Reservations',
      search_lab_label: 'Search lab code or specs',
      search_lab_ph: 'Search code, RTX, Ubuntu, MikroTik...',
      cal_daily: 'Daily',
      cal_weekly: 'Weekly',
      btn_today: 'Today',
      filter_all: 'All',
      filter_now: 'Open Now',
      filter_avail: 'Has Open Slots',
      filter_maint: 'Maintenance',
      legend_open: 'Available (click to book)',
      legend_prac: 'Routine Practicum',
      legend_res: 'Reserved (Approved)',
      legend_pend: 'Pending Verification',
      loading_labs: 'Loading laboratory schedule...',
      empty_labs_title: 'No laboratories match your filters',
      empty_labs_desc: 'Adjust status filters or pick another date to see available rooms.',
      btn_show_all_labs: 'Show All Labs',
      form_book_title: 'Lab Usage Request Form',
      form_book_desc: 'Automatic conflict checks run against routine practicums and existing bookings.',
      lbl_lab_room: 'Laboratory Room',
      lbl_usage_date: 'Usage Date',
      lbl_participants: 'Number of Students',
      lbl_start_time: 'Start Time',
      lbl_end_time: 'End Time',
      lbl_purpose: 'Activity Purpose',
      ph_purpose: 'e.g., Web Programming final project development',
      lbl_members: 'Team Members (Name and Student ID)',
      ph_members: 'Bagas Prakoso (L200240081), Nadia Larasati (L200240147)',
      btn_submit_booking: 'Submit Reservation',
      btn_back_schedule: 'Back to Schedule',
      aside_title: 'Selected Lab Agenda',
      status_all: 'All',
      status_pending: 'Pending',
      status_approved: 'Approved',
      status_rejected: 'Rejected / Cancelled',
      btn_new_request: '+ New Request',
      col_code: 'Code',
      col_lab_date: 'Lab & Date',
      col_time: 'Time',
      col_purpose: 'Purpose',
      col_status: 'Status',
      col_action: 'Actions',
      empty_mine_title: 'No reservations yet',
      empty_mine_desc: 'Choose an open green slot on Lab Availability to submit a booking request.',
      btn_check_schedule: 'View Lab Schedule',
      guard_title: 'Lab Technician Access Required',
      guard_desc: 'This workspace is restricted to Lab Technician accounts. Sign in as a Lab Technician to verify requests and manage rooms.',
      btn_login_laboran: 'Sign In as Lab Technician',
      lmetric_pending: 'Needs Verification',
      lmetric_pending_note: 'Pending requests',
      lmetric_approved: 'Approved',
      lmetric_approved_note: 'E-tickets ready',
      lmetric_labs: 'Operational Labs',
      lmetric_jadwal: 'Routine Schedule',
      lmetric_jadwal_note: 'Weekly practicum sessions',
      ltab_verif: 'Verification Queue',
      ltab_labs: 'Lab Rooms',
      ltab_jadwal: 'Practicum Schedule',
      ltab_rekap: 'Usage Summary',
      ltab_users: 'User Accounts',
      ph_search_verif: 'Search applicant, student ID, ticket, or lab...',
      col_applicant: 'Applicant',
      col_lab_time: 'Lab & Time',
      col_purpose_members: 'Purpose & Team',
      col_tech_action: 'Technician Action',
      empty_verif_title: 'No matching booking requests',
      empty_verif_desc: 'Adjust status filters or search keywords to see other requests.',
      master_labs_title: 'Laboratory Master Data',
      master_labs_hint: 'Toggle Maintenance directly if a room is unavailable for maintenance.',
      btn_add_lab: '+ Add Lab Room',
      col_room_code: 'Code',
      col_room_name: 'Room Name',
      col_capacity: 'Capacity',
      col_specs: 'Specifications',
      ph_search_jadwal: 'Search course, class, or instructor...',
      all_days: 'All Days',
      day_1: 'Monday',
      day_2: 'Tuesday',
      day_3: 'Wednesday',
      day_4: 'Thursday',
      day_5: 'Friday',
      day_6: 'Saturday',
      btn_add_jadwal: '+ Add Schedule',
      col_lab: 'Lab',
      col_day_time: 'Day & Time',
      col_course_class: 'Course & Class',
      col_instructor: 'Instructor',
      empty_jadwal_title: 'No matching practicum schedule',
      empty_jadwal_desc: 'Adjust room, day, or search filters.',
      rekap_title: 'Lab Utilization Summary',
      rekap_hint: 'Calculated directly from active booking records.',
      btn_export_csv: 'Download CSV Report',
      col_prac_week: 'Practicums/Week',
      col_approved: 'Approved',
      col_pending: 'Pending',
      col_rejected: 'Rejected / Cancelled',
      ph_search_users: 'Search name, NIM, email, or role...',
      btn_add_user: '+ Add Account',
      col_user_name: 'Full Name',
      col_nim: 'Student ID / Code',
      col_ums_email: 'UMS Email',
      col_role: 'Role',
      col_bookings: 'Bookings',
      empty_users_title: 'No matching accounts',
      empty_users_desc: 'Adjust search keywords or add a new account.',
      modal_add_user: 'Add User Account',
      role_student: 'Student',
      role_admin: 'Admin / Lab Staff',
      lbl_password_opt: 'Password (leave blank when editing to keep current)',
      btn_save_account: 'Save Account',
      btn_admin_book: '+ Direct Booking / Block',
      modal_admin_book: 'Direct Booking / Admin Slot Block',
      lbl_admin_holder: 'Booked For / PIC',
      btn_save_booking: 'Confirm & Approve',
      period_all: 'All Periods',
      period_week: 'This Week (7d)',
      period_month: 'This Month',
      footer_left: '© 2026 LabSpace TI · Informatics Engineering, FKI UMS. All rights reserved.',
      footer_hours: 'Service Hours: Mon - Sat, 07:30 - 17:00 WIB',
      btn_reset_session: 'Reset session data',
      features_eyebrow: 'CORE CAPABILITIES',
      features_title: 'Everything needed for smooth Building J lab operations.',
      features_cta: 'Try Smart Slot Finder',
      feat1_title: 'Smart Slot Finder',
      feat1_desc: 'Filter open 1 to 3-hour blocks by target date, minimum PC count, and required lab software such as Docker, Python, or Figma.',
      feat2_title: 'Anti-Clash Engine',
      feat2_desc: 'Every submission checks routine weekly practicums, maintenance locks, room capacity, and existing reservations automatically.',
      feat3_title: 'QR E-Ticket & Permit',
      feat3_desc: 'Approved requests enter your E-Ticket Wallet with a scannable QR pass and printable official FKI UMS lab permit PDF.',
      feat4_title: 'LabSpace AI & Live CS',
      feat4_desc: 'Query instant room availability via LabSpace AI or reach Building J technicians directly during service hours.',
      rules_eyebrow: 'KEY PICKUP & GUIDELINES',
      rules_title: 'Building J Laboratory Usage Rules',
      rule1_title: 'Valid Student ID (KTM) Required',
      rule1_desc: 'Show your approved QR E-Ticket and deposit an active UMS KTM at the 2nd-floor technician room when collecting keys.',
      rule2_title: '15-Minute Check-In Tolerance',
      rule2_desc: 'Arrive within 15 minutes of your approved start time; unclaimed rooms may be released for other student teams.',
      rule3_title: 'Protect Workstations & Cleanliness',
      rule3_desc: 'No food or beverages inside lab rooms. Do not alter BIOS, network routing, or pre-installed practicum software.',
      rule4_title: 'Respect Routine Practicum Blocks',
      rule4_desc: 'Regular academic classes hold priority; check out and return keys cleanly before the next scheduled session.',
      desk_eyebrow: 'SERVICE DESK · FKI UMS',
      desk_title: 'Building J Floor 2 Technician Desk',
      desk_desc: 'Need help verifying a group booking, installing specialized coursework tools, or unlocking a lab outside regular slots?',
      desk_loc_lbl: 'Location',
      desk_loc_val: 'Building J, 2nd Floor · Informatics Lab Office (J.2.1 – J.2.4)',
      desk_addr_lbl: 'Campus Address',
      desk_addr_val: 'Kampus II Pabelan - Kartasura · Jl. Ahmad Yani, Pabelan, Kartasura, Sukoharjo 57169',
      desk_open_maps: 'Open Google Maps ↗',
      desk_hours_lbl: 'Technician Hours',
      desk_hours_val: 'Mon – Sat · 07:30 – 17:00 WIB',
      desk_access_lbl: 'Lab Operating Window',
      desk_btn_ai: 'Ask LabSpace AI',
      desk_btn_cs: 'Chat Lab Staff (CS)',
      faq_eyebrow: 'FREQUENTLY ASKED',
      faq_title: 'Common questions about lab booking and permits.',
      faq1_q: 'How long does Lab Technician approval take after submitting?',
      faq1_a: 'Requests submitted during service hours (Mon – Sat, 07:30 – 17:00 WIB) are typically reviewed within 15 to 45 minutes. Once approved, your QR E-Ticket and notification appear automatically.',
      faq2_q: 'Can I edit or cancel a reservation if my team schedule changes?',
      faq2_a: 'Yes. Open My Bookings while your request is still Pending to edit the room, time slot, or participant count—or cancel anytime so the slot opens back up for other students.',
      faq3_q: 'Do all team members need to book separately for one project session?',
      faq3_a: 'No. Only one person in charge (PIC) needs to submit the booking, then list the total participants and team members inside the form.',
      faq4_q: 'Why is a specific room marked as Maintenance?',
      faq4_a: 'Labs under hardware upgrades, OS imaging, or exam setup are temporarily locked by Lab Staff. Use Smart Slot Finder to immediately locate another operational room with matching software.',
      mob_home: 'Home',
      mob_schedule: 'Schedule',
      mob_book: 'Book',
      mob_tickets: 'Tickets',
      mob_admin: 'Admin',
      drawer_title: 'Account & Preferences',
      drawer_status: 'Account Status',
      drawer_lang: 'Language / Bahasa',
      btn_sign_in_account: 'Sign In to Account',
      btn_register_student: 'Register Student Account',
      btn_sign_out_account: 'Sign Out',
      btn_toggle_theme: 'Toggle Dark / Light Theme',
      btn_reset_session_cap: 'Reset Session Data',
      modal_slot_title: 'Room Schedule Detail',
      btn_close: 'Close',
      modal_edit_res_title: 'Edit Booking Request',
      lbl_date: 'Date',
      btn_cancel: 'Cancel',
      btn_save_changes: 'Save Changes',
      modal_permit_title: 'E-Ticket & Lab Usage Permit',
      btn_copy_ticket: 'Copy Ticket Code',
      btn_print_pdf: 'Print / Save PDF',
      modal_verify_title: 'Verify Booking Request',
      lbl_tech_note: 'Lab Technician Note',
      ph_tech_note: 'e.g., Approved. Pick up key in technician room floor 2 with student ID card.',
      btn_confirm: 'Confirm',
      modal_add_lab: 'Add Lab Room',
      lbl_capacity_pc: 'Capacity (PC)',
      opt_active: 'Active / Ready',
      btn_save_room: 'Save Room',
      modal_add_jadwal: 'Add Routine Practicum Schedule',
      lbl_day: 'Day',
      lbl_course: 'Course',
      lbl_class: 'Class',
      btn_save_schedule: 'Save Schedule',
      modal_confirm_title: 'Confirm Action',
      btn_confirm_yes: 'Yes, Continue',
      modal_auth_login: 'Sign In to LabSpace TI',
      modal_auth_register: 'Create Student Account',
      auth_back_home: 'Back to Overview',
      auth_login_badge: 'SIGN IN',
      auth_no_account: "Don't have a student account yet?",
      auth_go_register: 'Register here →',
      auth_reg_kicker: 'STUDENT REGISTRATION',
      auth_reg_aside_title: 'Create your Building J student pass in seconds.',
      auth_reg_pt1: 'Register once using your official UMS NIM & student email',
      auth_reg_pt2: 'Submit group or solo lab reservations anytime',
      auth_reg_pt3: 'Track technician approval & download printable permits',
      auth_reg_foot: 'FKI UMS Student Pass',
      auth_has_account: 'Already have an account?',
      auth_go_login: 'Sign in here →',
      auth_aside_kicker: 'BUILDING J · INFORMATICS',
      auth_aside_title: 'One workspace pass for every computer lab.',
      auth_aside_pt1: 'Real-time 07:00-21:00 room slot check',
      auth_aside_pt2: 'Automatic practicum clash protection',
      auth_aside_pt3: 'Verified QR e-ticket for key pickup',
      auth_aside_roles: 'Student & Lab Staff Access',
      auth_main_sub: 'Use your UMS student email or NIM to book and track rooms.',
      auth_main_sub_reg: 'Register your student NIM once to submit lab reservations.',
      tab_register: 'Student Register',
      lbl_email_or_nim: 'UMS Email or Student ID',
      ph_login_id: 'e.g., l200240081@student.ums.ac.id or L200240081',
      lbl_password: 'Password',
      ph_password: 'Enter password',
      quick_fill_hint: 'Quick fill registered demo accounts (password: <span class="mono">labspace123</span>):',
      btn_quick_mhs: 'Fill Student Account',
      btn_quick_lab: 'Fill Lab Technician',
      lbl_full_name: 'Full Name',
      ph_full_name: 'Student full name',
      lbl_nim: 'Student ID (NIM)',
      lbl_ums_email: 'UMS Email',
      ph_reg_pass: 'Minimum 6 characters',
      btn_create_enter: 'Create Account & Sign In'
    },
    id: {
      skip_content: 'Langsung ke konten utama',
      brand_sub: 'Gedung J FKI UMS',
      nav_overview: 'Beranda',
      nav_availability: 'Ketersediaan Lab',
      nav_book: 'Ajukan Reservasi',
      nav_my_bookings: 'Reservasi Saya',
      nav_finder: 'Cari Slot Kosong',
      nav_labs_dir: 'Info Lab & Praktikum',
      nav_tickets: 'Dompet E-Tiket',
      nav_admin: 'Pusat Admin',
      cf_group_student_tools: 'Alat Mahasiswa',
      finder_lbl_date: 'Tanggal Target',
      finder_lbl_dur: 'Durasi Dibutuhkan',
      finder_dur_1: '1 Jam',
      finder_dur_2: '2 Jam',
      finder_dur_3: '3 Jam',
      finder_lbl_pcs: 'Min. PC Dibutuhkan',
      finder_lbl_tool: 'Filter Software / Lab',
      finder_ph_tool: 'mis. Docker, Python, Figma, J.2.1',
      finder_empty_title: 'Tidak ada blok jam kosong berurutan',
      finder_empty_desc: 'Coba tanggal lain, durasi lebih singkat, atau kurangi syarat PC.',
      labs_prac_title: 'Jadwal Praktikum Rutin Mingguan',
      labs_prac_sub: 'Jam kuliah rutin otomatis mengunci ruangan; pilih slot kosong di luar jam praktikum ini.',
      col_time: 'Jam',
      tickets_empty_title: 'Belum ada E-Tiket disetujui',
      tickets_empty_desc: 'Begitu pengajuan disetujui Laboran, pas QR yang bisa di-scan akan otomatis muncul di sini untuk ambil kunci cepat.',
      nav_support: 'Pusat Bantuan',
      support_tab_ai: 'Asisten AI',
      support_tab_cs: 'Chat CS / Laboran',
      ai_head_title: 'Asisten AI LabSpace',
      ai_head_desc: 'Jawaban cepat soal ketersediaan lab real-time, aturan bentrok, dan prosedur E-Tiket.',
      btn_clear_chat: 'Bersihkan Chat',
      ph_ai_input: 'Tanya lab yang kosong hari ini, spesifikasi PC, atau cara booking...',
      btn_send: 'Kirim',
      cs_head_title: 'Chat Langsung CS / Teknisi Lab Gedung J',
      cs_head_desc: 'Ditangani langsung oleh Laboran Informatika pada jam layanan (Senin - Sabtu, 07:30 - 17:00 WIB).',
      cs_online_badge: 'CS Aktif',
      cs_topic_schedule: 'Jadwal & Bentrok',
      cs_topic_ticket: 'E-Tiket & Ambil Kunci',
      cs_topic_account: 'Kendala Akun / NIM',
      cs_topic_facility: 'PC Lab & Software',
      ph_cs_input: 'Tulis kendala Anda untuk dibantu CS / Laboran...',
      btn_send_cs: 'Kirim ke CS',
      btn_menu: 'Menu',
      drawer_workspace: 'Menu Ruang Kerja',
      menu_edit_profile: 'Edit Profil & Sandi',
      profile_lbl_avatar: 'Karakter Avatar',
      profile_modal_title: 'Pengaturan Akun',
      profile_modal_sub: 'Kelola kartu identitas, kontak, keamanan, dan preferensi ruang kerja.',
      profile_tab_general: 'Profil',
      profile_tab_security: 'Keamanan',
      profile_tab_prefs: 'Preferensi',
      profile_lbl_prodi: 'Program Studi / Unit',
      profile_ph_prodi: 'mis. Teknik Informatika · 2024',
      profile_lbl_phone: 'WhatsApp / Kontak',
      profile_ph_phone: '0812-3456-7890',
      lbl_nim_staff: 'NIM / Kode Staf',
      lbl_email_ums: 'Email UMS',
      profile_hint_email: 'Gunakan email resmi @student.ums.ac.id atau @ums.ac.id.',
      profile_security_note: 'Kosongkan semua kolom sandi jika hanya ingin memperbarui data profil. Masukkan kata sandi saat ini untuk mengganti sandi.',
      profile_lbl_curr_pass: 'Kata Sandi Saat Ini',
      profile_ph_curr_pass: 'Masukkan kata sandi saat ini',
      profile_lbl_new_pass: 'Kata Sandi Baru',
      profile_lbl_confirm_pass: 'Konfirmasi Kata Sandi Baru',
      profile_ph_confirm_pass: 'Ulangi kata sandi baru',
      profile_pref_lang_title: 'Bahasa Antarmuka',
      profile_pref_lang_desc: 'Langsung berlaku untuk navigasi, jadwal, dan surat izin.',
      profile_pref_theme_title: 'Tema Tampilan',
      profile_pref_theme_desc: 'Pilih mode terang siang hari atau mode gelap ruang kerja.',
      profile_theme_light: 'Terang',
      profile_theme_dark: 'Gelap',
      profile_pref_id_title: 'Salin Cepat NIM / Kode Staf',
      profile_pref_id_desc: 'Salin NIM atau kode staf terdaftar untuk formulir reservasi.',
      profile_btn_copy_id: 'Salin ID',
      btn_save_changes: 'Simpan Perubahan',
      ph_quick_search: 'Cari cepat...',
      cf_theme_short: 'Tampilan',
      cf_group_workspace: 'Ruang Kerja',
      cf_group_admin: 'Pusat Admin',
      lbl_quick_reason: 'Pilih Alasan Otomatis (Opsional)',
      opt_custom_reason: '-- Tulis manual / lewati --',
      btn_sign_in: 'Masuk',
      btn_register: 'Daftar',
      btn_sign_out: 'Keluar',
      notif_title: 'Pemberitahuan',
      notif_mark_read: 'Tandai dibaca',
      notif_empty: 'Belum ada pemberitahuan terbaru.',
      menu_label: 'Menu',
      cta_request_lab: 'Ajukan Pemakaian Lab',
      hero_kicker: 'Teknik Informatika · Gedung J FKI UMS',
      hero_title: 'Jadwal dan reservasi ruang lab komputer Gedung J secara real-time.',
      hero_desc: 'Cek ruangan kosong di sela praktikum rutin, cegah jadwal bentrok secara otomatis, dan unduh surat izin e-tiket resmi dalam satu tempat.',
      hero_cta_explore: 'Lihat Jadwal Lab',
      hero_cta_auth: 'Masuk / Daftar',
      hero_cta_dashboard: 'Buka Jadwal Lab',
      stat_active_rooms: 'Lab Beroperasi',
      stat_open_today: 'Slot Kosong Hari Ini',
      stat_hours: 'Jam Layanan',
      hero_snapshot_label: 'KONDISI SAAT INI · GEDUNG J',
      hero_open_board: 'Buka Jadwal Lengkap →',
      pinned_eyebrow: 'ALUR KERJA LABSPACE',
      pinned_title: 'Empat langkah terstruktur dari cek ruang kosong hingga ambil kunci.',
      pinned_lead: 'Dirancang mengikuti alur nyata mahasiswa dan laboran agar pengecekan ruang tidak perlu menebak dan verifikasi bebas bentrok.',
      step1_title: 'Cek Ketersediaan Langsung',
      step1_desc: 'Pantau slot harian 07:00 - 21:00 serta ringkasan mingguan ruang J.2.1 hingga J.2.4 lengkap dengan spesifikasi perangkat.',
      step2_title: 'Form Pengajuan Anti-Bentrok',
      step2_desc: 'Pilih slot kosong dan sistem langsung memvalidasi terhadap praktikum rutin, status maintenance, kapasitas PC, dan reservasi aktif.',
      step3_title: 'Verifikasi Panel Laboran',
      step3_desc: 'Pengelola lab Gedung J meninjau permohonan pending di console khusus dengan pengecekan ulang bentrok otomatis sebelum menyetujui.',
      step4_title: 'E-Tiket & Surat Izin PDF Resmi',
      step4_desc: 'Pengajuan yang disetujui menerbitkan surat izin Informatika UMS beserta kode QR verifikasi untuk pengambilan kunci di ruang teknisi lantai 2.',
      showcase_eyebrow: 'RUANG LAB GEDUNG J',
      showcase_title: 'Empat laboratorium komputer siap mendukung tugas kuliah dan proyek tim.',
      showcase_btn: 'Lihat Jadwal Interaktif',
      cta_final_title: 'Siap memesan ruang lab di Gedung J?',
      cta_final_desc: 'Cek slot tersedia sekarang atau masuk dengan akun mahasiswa UMS untuk mengirim permohonan.',
      metric_total_labs: 'Total Lab',
      metric_open_slots: 'Slot Kosong (Tanggal)',
      metric_open_note: 'Klik slot hijau untuk ajukan',
      metric_practicum: 'Praktikum Rutin',
      metric_practicum_note: 'Blok jadwal kuliah tetap',
      metric_booked: 'Reservasi Aktif',
      search_lab_label: 'Cari kode lab atau spesifikasi',
      search_lab_ph: 'Cari kode lab, RTX, Ubuntu, MikroTik...',
      cal_daily: 'Harian',
      cal_weekly: 'Mingguan',
      btn_today: 'Hari Ini',
      filter_all: 'Semua',
      filter_now: 'Kosong Sekarang',
      filter_avail: 'Ada Slot',
      filter_maint: 'Maintenance',
      legend_open: 'Tersedia (klik untuk ajukan)',
      legend_prac: 'Praktikum Rutin',
      legend_res: 'Ter-reservasi (Disetujui)',
      legend_pend: 'Menunggu Verifikasi',
      loading_labs: 'Memuat jadwal ruangan lab...',
      empty_labs_title: 'Tidak ada ruang lab yang sesuai filter',
      empty_labs_desc: 'Ubah filter status atau pilih tanggal lain untuk melihat ruang tersedia.',
      btn_show_all_labs: 'Tampilkan Semua Lab',
      form_book_title: 'Formulir Pengajuan Pemakaian Lab',
      form_book_desc: 'Validasi bentrok dijalankan otomatis terhadap jadwal praktikum rutin dan reservasi lain.',
      lbl_lab_room: 'Ruang Laboratorium',
      lbl_usage_date: 'Tanggal Pemakaian',
      lbl_participants: 'Jumlah Mahasiswa',
      lbl_start_time: 'Jam Mulai',
      lbl_end_time: 'Jam Selesai',
      lbl_purpose: 'Keperluan Kegiatan',
      ph_purpose: 'Contoh: Pengembangan proyek akhir Pemrograman Web',
      lbl_members: 'Daftar Anggota (Nama dan NIM)',
      ph_members: 'Bagas Prakoso (L200240081), Nadia Larasati (L200240147)',
      btn_submit_booking: 'Kirim Pengajuan',
      btn_back_schedule: 'Kembali ke Jadwal',
      aside_title: 'Agenda Ruang Terpilih',
      status_all: 'Semua',
      status_pending: 'Menunggu',
      status_approved: 'Disetujui',
      status_rejected: 'Ditolak / Batal',
      btn_new_request: '+ Ajukan Baru',
      col_code: 'Kode',
      col_lab_date: 'Lab & Tanggal',
      col_time: 'Jam',
      col_purpose: 'Keperluan',
      col_status: 'Status',
      col_action: 'Aksi',
      empty_mine_title: 'Belum ada reservasi',
      empty_mine_desc: 'Pilih slot hijau yang kosong di halaman Ketersediaan Lab untuk mengajukan permohonan.',
      btn_check_schedule: 'Lihat Jadwal Lab',
      guard_title: 'Akses Terbatas Pengelola Lab',
      guard_desc: 'Halaman ini hanya tersedia untuk akun Laboran. Masuk sebagai Laboran untuk memverifikasi permohonan dan mengelola ruangan.',
      btn_login_laboran: 'Masuk sebagai Laboran',
      lmetric_pending: 'Perlu Verifikasi',
      lmetric_pending_note: 'Permohonan menunggu',
      lmetric_approved: 'Disetujui',
      lmetric_approved_note: 'Siap cetak e-tiket',
      lmetric_labs: 'Lab Beroperasi',
      lmetric_jadwal: 'Jadwal Rutin',
      lmetric_jadwal_note: 'Sesi praktikum mingguan',
      ltab_verif: 'Antrean Verifikasi',
      ltab_labs: 'Master Ruang Lab',
      ltab_jadwal: 'Jadwal Praktikum',
      ltab_rekap: 'Rekap Pemakaian',
      ltab_users: 'Akun Pengguna',
      ph_search_verif: 'Cari pemohon, NIM, tiket, atau lab...',
      col_applicant: 'Pemohon',
      col_lab_time: 'Lab & Waktu',
      col_purpose_members: 'Keperluan & Tim',
      col_tech_action: 'Tindakan Laboran',
      empty_verif_title: 'Tidak ada permohonan yang cocok',
      empty_verif_desc: 'Ubah filter status atau kata kunci pencarian.',
      master_labs_title: 'Master Data Ruang Laboratorium',
      master_labs_hint: 'Gunakan tombol cepat Maintenance jika ruang tidak dapat dipakai.',
      btn_add_lab: '+ Tambah Ruang Lab',
      col_room_code: 'Kode',
      col_room_name: 'Nama Lab',
      col_capacity: 'Kapasitas',
      col_specs: 'Spesifikasi',
      ph_search_jadwal: 'Cari mata kuliah, kelas, atau pengampu...',
      all_days: 'Semua Hari',
      day_1: 'Senin',
      day_2: 'Selasa',
      day_3: 'Rabu',
      day_4: 'Kamis',
      day_5: 'Jumat',
      day_6: 'Sabtu',
      btn_add_jadwal: '+ Tambah Jadwal',
      col_lab: 'Lab',
      col_day_time: 'Hari & Jam',
      col_course_class: 'Mata Kuliah & Kelas',
      col_instructor: 'Pengampu',
      empty_jadwal_title: 'Tidak ada jadwal yang cocok',
      empty_jadwal_desc: 'Ubah filter ruang, hari, atau kata kunci pencarian.',
      rekap_title: 'Ringkasan Pemanfaatan Lab',
      rekap_hint: 'Dihitung langsung dari catatan reservasi aktif.',
      btn_export_csv: 'Unduh Rekap CSV',
      col_prac_week: 'Praktikum/Minggu',
      col_approved: 'Disetujui',
      col_pending: 'Pending',
      col_rejected: 'Ditolak / Batal',
      ph_search_users: 'Cari nama, NIM, email, atau role...',
      btn_add_user: '+ Tambah Akun',
      col_user_name: 'Nama Lengkap',
      col_nim: 'NIM / Kode',
      col_ums_email: 'Email UMS',
      col_role: 'Peran',
      col_bookings: 'Reservasi',
      empty_users_title: 'Tidak ada akun yang cocok',
      empty_users_desc: 'Ubah kata kunci pencarian atau tambah akun baru.',
      modal_add_user: 'Tambah Akun Pengguna',
      role_student: 'Mahasiswa',
      role_admin: 'Admin / Laboran',
      lbl_password_opt: 'Kata Sandi (kosongkan saat edit untuk mempertahankan sandi lama)',
      btn_save_account: 'Simpan Akun',
      btn_admin_book: '+ Buat Reservasi / Blokir',
      modal_admin_book: 'Buat Reservasi Langsung / Blokir Slot',
      lbl_admin_holder: 'Atas Nama / Penanggung Jawab',
      btn_save_booking: 'Simpan & Setujui',
      period_all: 'Semua Periode',
      period_week: 'Minggu Ini (7h)',
      period_month: 'Bulan Ini',
      footer_left: '© 2026 LabSpace TI · Teknik Informatika FKI UMS. Hak cipta dilindungi.',
      footer_hours: 'Jam Layanan: Senin - Sabtu, 07:30 - 17:00 WIB',
      btn_reset_session: 'Reset data sesi',
      features_eyebrow: 'FITUR UTAMA',
      features_title: 'Semua kebutuhan operasional lab Gedung J dalam satu ruang kerja.',
      features_cta: 'Coba Cari Slot Kosong',
      feat1_title: 'Pencari Slot Pintar',
      feat1_desc: 'Filter blok kosong 1 hingga 3 jam berdasarkan tanggal target, jumlah PC minimal, dan software seperti Docker, Python, atau Figma.',
      feat2_title: 'Mesin Anti-Bentrok',
      feat2_desc: 'Setiap pengajuan otomatis memeriksa praktikum rutin mingguan, status maintenance, kapasitas PC, dan reservasi aktif.',
      feat3_title: 'E-Tiket QR & Surat Izin',
      feat3_desc: 'Pengajuan yang disetujui langsung masuk ke Dompet E-Tiket lengkap dengan pas QR dan surat izin PDF resmi FKI UMS.',
      feat4_title: 'LabSpace AI & CS Langsung',
      feat4_desc: 'Tanya ketersediaan ruang secara instan ke LabSpace AI atau hubungi langsung laboran Gedung J pada jam layanan.',
      rules_eyebrow: 'TATA TERTIB & AMBIL KUNCI',
      rules_title: 'Aturan Penggunaan Lab Gedung J',
      rule1_title: 'Wajib Menunjukkan KTM Aktif',
      rule1_desc: 'Tunjukkan E-Tiket QR yang disetujui dan titipkan KTM UMS aktif di ruang teknisi lantai 2 saat mengambil kunci ruangan.',
      rule2_title: 'Toleransi Keterlambatan 15 Menit',
      rule2_desc: 'Hadir maksimal 15 menit dari jam mulai yang disetujui; ruangan yang belum diambil dapat dialihkan ke kelompok lain.',
      rule3_title: 'Jaga Perangkat & Kebersihan Lab',
      rule3_desc: 'Dilarang membawa makanan/minuman ke dalam lab. Tidak diperkenankan mengubah BIOS, jaringan, atau konfigurasi praktikum.',
      rule4_title: 'Hormati Jam Praktikum Rutin',
      rule4_desc: 'Kuliah praktikum reguler mendapat prioritas utama; pastikan ruangan rapi dan kunci dikembalikan sebelum sesi berikutnya.',
      desk_eyebrow: 'MEJA LAYANAN · FKI UMS',
      desk_title: 'Ruang Teknisi Gedung J Lantai 2',
      desk_desc: 'Butuh bantuan verifikasi peminjaman kelompok, instalasi software tugas kuliah, atau akses di luar jam reguler?',
      desk_loc_lbl: 'Lokasi',
      desk_loc_val: 'Gedung J Lantai 2 · Kantor Lab Informatika (J.2.1 – J.2.4)',
      desk_addr_lbl: 'Alamat Kampus',
      desk_addr_val: 'Kampus II Pabelan - Kartasura · Jl. Ahmad Yani, Pabelan, Kartasura, Sukoharjo 57169',
      desk_open_maps: 'Buka Google Maps ↗',
      desk_hours_lbl: 'Jam Layanan Laboran',
      desk_hours_val: 'Senin – Sabtu · 07:30 – 17:00 WIB',
      desk_access_lbl: 'Jam Operasional Lab',
      desk_btn_ai: 'Tanya LabSpace AI',
      desk_btn_cs: 'Chat Laboran (CS)',
      faq_eyebrow: 'TANYA JAWAB',
      faq_title: 'Pertanyaan umum seputar booking lab dan surat izin.',
      faq1_q: 'Berapa lama persetujuan Laboran setelah pengajuan dikirim?',
      faq1_a: 'Permohonan pada jam layanan (Senin – Sabtu, 07:30 – 17:00 WIB) umumnya diproses dalam 15 hingga 45 menit. Setelah disetujui, E-Tiket QR dan notifikasi muncul otomatis.',
      faq2_q: 'Apakah reservasi bisa diubah atau dibatalkan jika jadwal tim berubah?',
      faq2_a: 'Bisa. Buka menu Reservasi Saya selama status masih Pending untuk mengubah ruang, jam, atau jumlah peserta—atau batalkan kapan saja agar slot kembali terbuka.',
      faq3_q: 'Apakah seluruh anggota kelompok harus mengajukan booking satu per satu?',
      faq3_a: 'Tidak perlu. Cukup satu penanggung jawab (PJ) yang mengirim pengajuan, lalu cantumkan total peserta dan nama anggota di dalam formulir.',
      faq4_q: 'Mengapa salah satu ruang bertanda Maintenance?',
      faq4_a: 'Ruangan yang sedang menjalani pembaruan perangkat, instalasi OS, atau persiapan ujian dikunci sementara oleh Laboran. Gunakan Pencari Slot Pintar untuk mencari lab lain yang tersedia.',
      mob_home: 'Beranda',
      mob_schedule: 'Jadwal',
      mob_book: 'Ajukan',
      mob_tickets: 'Tiket',
      mob_admin: 'Laboran',
      drawer_title: 'Akun & Preferensi',
      drawer_status: 'Status Akun',
      drawer_lang: 'Bahasa / Language',
      btn_sign_in_account: 'Masuk ke Akun',
      btn_register_student: 'Daftar Akun Mahasiswa',
      btn_sign_out_account: 'Keluar dari Akun',
      btn_toggle_theme: 'Ganti Tema Terang / Gelap',
      btn_reset_session_cap: 'Reset Data Sesi',
      modal_slot_title: 'Detail Jadwal Ruang',
      btn_close: 'Tutup',
      modal_edit_res_title: 'Ubah Pengajuan Reservasi',
      lbl_date: 'Tanggal',
      btn_cancel: 'Batal',
      btn_save_changes: 'Simpan Perubahan',
      modal_permit_title: 'E-Tiket & Surat Izin Penggunaan Lab',
      btn_copy_ticket: 'Salin Kode Tiket',
      btn_print_pdf: 'Cetak / Simpan PDF',
      modal_verify_title: 'Verifikasi Permohonan Lab',
      lbl_tech_note: 'Catatan Laboran',
      ph_tech_note: 'Contoh: Disetujui. Kunci diambil di ruang teknisi lantai 2 dengan jaminan KTM.',
      btn_confirm: 'Konfirmasi',
      modal_add_lab: 'Tambah Ruang Lab',
      lbl_capacity_pc: 'Kapasitas (PC)',
      opt_active: 'Aktif / Siap Pakai',
      btn_save_room: 'Simpan Ruang',
      modal_add_jadwal: 'Tambah Jadwal Praktikum Rutin',
      lbl_day: 'Hari',
      lbl_course: 'Mata Kuliah',
      lbl_class: 'Kelas',
      btn_save_schedule: 'Simpan Jadwal',
      modal_confirm_title: 'Konfirmasi Tindakan',
      btn_confirm_yes: 'Ya, Lanjutkan',
      modal_auth_login: 'Masuk ke LabSpace TI',
      modal_auth_register: 'Daftar Akun Mahasiswa',
      auth_back_home: 'Kembali ke Beranda',
      auth_login_badge: 'MASUK',
      auth_no_account: 'Belum punya akun mahasiswa?',
      auth_go_register: 'Daftar di sini →',
      auth_reg_kicker: 'PENDAFTARAN MAHASISWA',
      auth_reg_aside_title: 'Buat pas akses lab Gedung J dalam hitungan detik.',
      auth_reg_pt1: 'Daftar sekali menggunakan NIM dan email mahasiswa UMS resmi',
      auth_reg_pt2: 'Ajukan reservasi lab mandiri maupun kelompok kapan saja',
      auth_reg_pt3: 'Pantau persetujuan laboran & unduh surat izin resmi',
      auth_reg_foot: 'Pas Mahasiswa FKI UMS',
      auth_has_account: 'Sudah punya akun?',
      auth_go_login: 'Masuk di sini →',
      auth_aside_kicker: 'GEDUNG J · TEKNIK INFORMATIKA',
      auth_aside_title: 'Satu akses terpadu untuk seluruh lab komputer.',
      auth_aside_pt1: 'Cek slot ruang 07:00-21:00 secara langsung',
      auth_aside_pt2: 'Cegah bentrok praktikum secara otomatis',
      auth_aside_pt3: 'E-tiket QR resmi untuk pengambilan kunci',
      auth_aside_roles: 'Akses Mahasiswa & Laboran',
      auth_main_sub: 'Gunakan email UMS atau NIM untuk mengajukan dan memantau jadwal.',
      auth_main_sub_reg: 'Daftarkan NIM mahasiswa untuk mulai mengajukan pemakaian lab.',
      tab_register: 'Daftar Mahasiswa',
      lbl_email_or_nim: 'Email UMS atau NIM',
      ph_login_id: 'Contoh: l200240081@student.ums.ac.id atau L200240081',
      lbl_password: 'Kata Sandi',
      ph_password: 'Masukkan kata sandi',
      quick_fill_hint: 'Isi cepat akun terdaftar (kata sandi: <span class="mono">labspace123</span>):',
      btn_quick_mhs: 'Isi Akun Mahasiswa',
      btn_quick_lab: 'Isi Akun Laboran',
      lbl_full_name: 'Nama Lengkap',
      ph_full_name: 'Nama lengkap mahasiswa',
      lbl_nim: 'NIM',
      lbl_ums_email: 'Email UMS',
      ph_reg_pass: 'Minimal 6 karakter',
      btn_create_enter: 'Buat Akun & Masuk'
    }
  };

  const DAY_NAMES_BY_LANG = {
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    id: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  };

  const MONTH_NAMES_BY_LANG = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    id: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
  };

  function tr(key) {
    const lang = state.lang === 'id' ? 'id' : 'en';
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  }

  function isId() {
    return state.lang === 'id';
  }

  function toIsoDate(dateObj) {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function addDays(isoDate, delta) {
    const parts = isoDate.split('-').map(Number);
    const dt = new Date(parts[0], parts[1] - 1, parts[2]);
    dt.setDate(dt.getDate() + delta);
    return toIsoDate(dt);
  }

  function getDayIndex(isoDate) {
    const parts = isoDate.split('-').map(Number);
    return new Date(parts[0], parts[1] - 1, parts[2]).getDay();
  }

  function formatDisplayDate(isoDate) {
    const parts = isoDate.split('-').map(Number);
    const dt = new Date(parts[0], parts[1] - 1, parts[2]);
    const lang = isId() ? 'id' : 'en';
    const dName = DAY_NAMES_BY_LANG[lang][dt.getDay()].slice(0, 3);
    const mName = MONTH_NAMES_BY_LANG[lang][parts[1] - 1];
    return `${dName}, ${parts[2]} ${mName} ${parts[0]}`;
  }

  function formatLongDate(isoDate) {
    const parts = isoDate.split('-').map(Number);
    const dt = new Date(parts[0], parts[1] - 1, parts[2]);
    const lang = isId() ? 'id' : 'en';
    const dName = DAY_NAMES_BY_LANG[lang][dt.getDay()];
    const mName = MONTH_NAMES_BY_LANG[lang][parts[1] - 1];
    return `${dName}, ${parts[2]} ${mName} ${parts[0]}`;
  }

  function getWibNow() {
    const now = new Date();
    const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
    const wib = new Date(utcMs + 7 * 3600000);
    const y = wib.getFullYear();
    const m = String(wib.getMonth() + 1).padStart(2, '0');
    const d = String(wib.getDate()).padStart(2, '0');
    const hh = String(wib.getHours()).padStart(2, '0');
    const mm = String(wib.getMinutes()).padStart(2, '0');
    return {
      isoDate: `${y}-${m}-${d}`,
      hhmm: `${hh}:${mm}`,
      minutes: wib.getHours() * 60 + wib.getMinutes()
    };
  }

  function timeToMin(hhmm) {
    const [h, m] = hhmm.split(':').map(Number);
    return h * 60 + m;
  }

  function isOverlap(s1, e1, s2, e2) {
    return timeToMin(s1) < timeToMin(e2) && timeToMin(e1) > timeToMin(s2);
  }

  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getWeekDates(isoDate) {
    const parts = isoDate.split('-').map(Number);
    const dt = new Date(parts[0], parts[1] - 1, parts[2]);
    const day = dt.getDay();
    const diffToMon = day === 0 ? -6 : 1 - day;
    const mon = new Date(parts[0], parts[1] - 1, parts[2] + diffToMon);
    const list = [];
    for (let i = 0; i < 6; i += 1) {
      const d = new Date(mon.getFullYear(), mon.getMonth(), mon.getDate() + i);
      list.push(toIsoDate(d));
    }
    return list;
  }

  const CHARACTER_AVATARS = [
    {
      id: 'coder',
      labelEn: 'Coder',
      labelId: 'Coder',
      hair: '#1f2937',
      shirt: '#4f46e5',
      accent: '#818cf8',
      glasses: true,
      hat: 'hair'
    },
    {
      id: 'tech',
      labelEn: 'Lab Tech',
      labelId: 'Teknisi',
      hair: '#0f172a',
      shirt: '#0284c7',
      accent: '#38bdf8',
      glasses: false,
      hat: 'visor'
    },
    {
      id: 'builder',
      labelEn: 'Builder',
      labelId: 'Builder',
      hair: '#78350f',
      shirt: '#d97706',
      accent: '#fbbf24',
      glasses: false,
      hat: 'cap'
    },
    {
      id: 'analyst',
      labelEn: 'Analyst',
      labelId: 'Analis',
      hair: '#3f2e21',
      shirt: '#0f766e',
      accent: '#2dd4bf',
      glasses: true,
      hat: 'bob'
    }
  ];

  function resolveUserAvatarStyle(user) {
    if (user && CHARACTER_AVATARS.some((a) => a.id === user.avatarStyle)) {
      return user.avatarStyle;
    }
    if (user && user.role === 'laboran') return 'tech';
    return 'coder';
  }

  function buildCharacterAvatarSvg(styleKey = 'coder') {
    const cfg = CHARACTER_AVATARS.find((a) => a.id === styleKey) || CHARACTER_AVATARS[0];
    let headTop = '';
    if (cfg.hat === 'cap') {
      headTop = `<path d="M10 14C10 8.5 14.5 6 20 6C25.5 6 30 8.5 30 14H10Z" fill="#ef4444"/><rect x="19" y="12.5" width="13.5" height="3" rx="1.5" fill="#dc2626"/>`;
    } else if (cfg.hat === 'visor') {
      headTop = `<rect x="15.5" y="4.2" width="9" height="3.2" rx="1.2" fill="#facc15"/><path d="M11 13.5C11 9 14.8 6.8 20 6.8C25.2 6.8 29 9 29 13.5H11Z" fill="${cfg.hair}"/><rect x="10.5" y="15" width="19" height="4.2" rx="2" fill="#38bdf8" opacity="0.88"/>`;
    } else if (cfg.hat === 'bob') {
      headTop = `<rect x="15.5" y="4.2" width="9" height="3.2" rx="1.2" fill="#facc15"/><path d="M10 14C10 8.2 14.5 6.2 20 6.2C25.5 6.2 30 8.2 30 14V21.5H27.5V14.5H12.5V21.5H10V14Z" fill="${cfg.hair}"/>`;
    } else {
      headTop = `<rect x="15.5" y="4.2" width="9" height="3.2" rx="1.2" fill="#facc15"/><path d="M10.5 13.8C10.5 8.8 14.5 6.5 20 6.5C25.5 6.5 29.5 8.8 29.5 13.8L26.5 12.2L22.5 14L18.5 11.8L13.5 13.8H10.5Z" fill="${cfg.hair}"/>`;
    }
    const glassesSvg = cfg.glasses
      ? `<rect x="12.2" y="15.3" width="6.2" height="4.4" rx="1.4" fill="none" stroke="#18181b" stroke-width="1.3"/><rect x="21.6" y="15.3" width="6.2" height="4.4" rx="1.4" fill="none" stroke="#18181b" stroke-width="1.3"/><line x1="18.4" y1="17.2" x2="21.6" y2="17.2" stroke="#18181b" stroke-width="1.3"/>`
      : '';
    return `<svg class="lego-avatar-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g class="lego-torso">
        <rect x="8.5" y="27.5" width="23" height="10.5" rx="4" fill="${cfg.shirt}"/>
        <path d="M16.5 27.5L20 31.5L23.5 27.5" fill="${cfg.accent}"/>
        <rect x="17" y="24.5" width="6" height="4" rx="1.5" fill="#eab308"/>
      </g>
      <g class="lego-head">
        <rect x="11" y="10" width="18" height="15.5" rx="5.2" fill="#facc15"/>
        <circle cx="13.5" cy="20.2" r="1.4" fill="#f97316" opacity="0.35"/>
        <circle cx="26.5" cy="20.2" r="1.4" fill="#f97316" opacity="0.35"/>
        <g class="lego-eyes">
          <circle cx="15.3" cy="17.5" r="1.45" fill="#18181b"/>
          <circle cx="24.7" cy="17.5" r="1.45" fill="#18181b"/>
          <circle cx="15.7" cy="17.0" r="0.45" fill="#ffffff"/>
          <circle cx="25.1" cy="17.0" r="0.45" fill="#ffffff"/>
        </g>
        <path d="M16.8 21.4C18 22.8 22 22.8 23.2 21.4" stroke="#18181b" stroke-width="1.45" stroke-linecap="round"/>
        ${glassesSvg}
        ${headTop}
      </g>
    </svg>`;
  }

  function initialsOf(name) {
    return String(name || 'US')
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase() || '')
      .join('') || 'US';
  }

  function createDefaultState() {
    const today = getWibNow().isoDate;
    const tomorrow = addDays(today, 1);
    const todayDow = getDayIndex(today) || 5;

    return {
      lang: 'en',
      currentUserId: null,
      selectedDate: today,
      calendarMode: 'daily',
      monitoringTab: '1',
      roomSubTab: 'schedule',
      labFilter: 'all',
      searchQuery: '',
      notifReadKeys: [],
      mineFilter: 'all',
      activeView: 'landing',
      activeLaboranTab: 'verifikasi',
      verifFilter: 'all',
      verifLabFilter: 'all',
      verifSearch: '',
      rekapPeriod: 'all',
      jadwalSearch: '',
      jadwalLabFilter: 'all',
      jadwalDayFilter: 'all',
      userSearch: '',
      supportMode: 'ai',
      aiMessages: [],
      csMessages: [
        {
          id: 1,
          sender: 'Lab Staff CS (Budi Hartono)',
          role: 'cs',
          topic: 'ticket',
          time: '08:00 WIB',
          text: 'Selamat datang di Pusat Bantuan LabSpace TI Gedung J. Silakan pilih kategori kendala dan kirim pesan jika ada masalah jadwal, E-Tiket, atau fasilitas PC.'
        }
      ],
      users: [
        {
          id: 1,
          name: 'Bagas Prakoso',
          nim: 'L200240081',
          email: 'l200240081@student.ums.ac.id',
          password: 'labspace123',
          role: 'mahasiswa',
          prodi: 'Teknik Informatika · 2024',
          phone: '0812-3456-7890'
        },
        {
          id: 2,
          name: 'Nadia Larasati',
          nim: 'L200240147',
          email: 'l200240147@student.ums.ac.id',
          password: 'labspace123',
          role: 'mahasiswa',
          prodi: 'Teknik Informatika · 2024',
          phone: '0813-2901-4417'
        },
        {
          id: 3,
          name: 'Hendra Wijaya',
          nim: 'L200230094',
          email: 'l200230094@student.ums.ac.id',
          password: 'labspace123',
          role: 'mahasiswa',
          prodi: 'Teknik Informatika · 2023',
          phone: '0857-4210-8832'
        },
        {
          id: 4,
          name: 'Budi Hartono',
          nim: 'ADMIN-LAB',
          email: 'laboran@ums.ac.id',
          password: 'labspace123',
          role: 'laboran',
          prodi: 'Unit Laboratorium FKI',
          phone: '0811-2650-900'
        }
      ],
      labs: [
        {
          id: 1,
          kode: 'J.2.1',
          nama: 'Software Engineering Lab',
          namaId: 'Lab Rekayasa Perangkat Lunak',
          lantai: 'Gedung J · Lt. 2',
          photo: 'assets/labs/j21.webp',
          kapasitas: 40,
          spesifikasi: 'Intel Core i7-13700, 32GB DDR5, 1TB NVMe, Dual-Boot Win 11 & Ubuntu 24.04',
          specsDetail: {
            cpu: 'Intel Core i7-13700 (16C / 24T, up to 5.2 GHz)',
            ram: '32 GB DDR5-4800 Dual Channel',
            storage: '1 TB Samsung NVMe PCIe 4.0 SSD',
            gpu: 'Intel UHD Graphics 770',
            display: '24" Dell P2422H IPS FHD (1920x1080)',
            network: '1 Gbps Managed LAN + Wi-Fi 6 AX',
            os: 'Dual-Boot Windows 11 Pro & Ubuntu 24.04 LTS',
            software: 'VS Code, IntelliJ IDEA, Docker Desktop, Node.js 22, PostgreSQL 16'
          },
          status: 'aktif'
        },
        {
          id: 2,
          kode: 'J.2.2',
          nama: 'Networking & Security Lab',
          namaId: 'Lab Jaringan & Keamanan Sistem',
          lantai: 'Gedung J · Lt. 2',
          photo: 'assets/labs/j22.webp',
          kapasitas: 36,
          spesifikasi: 'Intel Core i5-13500, 16GB DDR4, MikroTik RB4011, Cisco Catalyst 2960-X',
          specsDetail: {
            cpu: 'Intel Core i5-13500 (14C / 20T, up to 4.8 GHz)',
            ram: '16 GB DDR4-3200 Dual Channel',
            storage: '512 GB WD Black NVMe PCIe 4.0 SSD',
            gpu: 'Intel UHD 770 + Dual Intel I225-V 2.5G NIC',
            display: '23.8" Lenovo ThinkVision IPS FHD',
            network: '8x MikroTik RB4011iGS+RM, 6x Cisco Catalyst 2960-X, 4x UniFi AP',
            os: 'Ubuntu 24.04 LTS + Kali Linux VM + Windows 11 Pro',
            software: 'GNS3, Cisco Packet Tracer, Winbox, Wireshark, Nmap, VirtualBox'
          },
          status: 'aktif'
        },
        {
          id: 3,
          kode: 'J.2.3',
          nama: 'Multimedia & Graphics Lab',
          namaId: 'Lab Multimedia & Grafika',
          lantai: 'Gedung J · Lt. 2',
          photo: 'assets/labs/j23.webp',
          kapasitas: 32,
          spesifikasi: 'Intel Core i7-13700K, RTX 3060 12GB, 32GB DDR5, ASUS ProArt 27" sRGB',
          specsDetail: {
            cpu: 'Intel Core i7-13700K (16C / 24T, up to 5.4 GHz)',
            ram: '32 GB DDR5-5200 Dual Channel',
            storage: '1 TB NVMe Gen4 SSD + 2 TB SATA HDD',
            gpu: 'NVIDIA GeForce RTX 3060 12 GB GDDR6',
            display: '27" ASUS ProArt PA278QV WQHD (100% sRGB Calibrated)',
            network: '1 Gbps Managed LAN + 10 Gbps Media NAS Uplink',
            os: 'Windows 11 Pro (NVIDIA Studio Driver)',
            software: 'Blender 4.2, Unity LTS, Figma Desktop, DaVinci Resolve, GIMP, OBS'
          },
          status: 'aktif'
        },
        {
          id: 4,
          kode: 'J.2.4',
          nama: 'Intelligent Systems & Data Lab',
          namaId: 'Lab Sistem Cerdas & Data',
          lantai: 'Gedung J · Lt. 2',
          photo: 'assets/labs/j24.webp',
          kapasitas: 30,
          spesifikasi: 'AMD Ryzen 7 7700, RTX 4060 8GB, 32GB DDR5, Ubuntu 24.04 + CUDA 12.6',
          specsDetail: {
            cpu: 'AMD Ryzen 7 7700 (8C / 16T, up to 5.3 GHz)',
            ram: '32 GB DDR5-5200 Dual Channel',
            storage: '1 TB Crucial T500 NVMe PCIe 4.0 SSD',
            gpu: 'NVIDIA GeForce RTX 4060 8 GB GDDR6 (CUDA 8.9)',
            display: '24" LG UltraGear IPS FHD (1920x1080)',
            network: '1 Gbps LAN + Local Dell PowerEdge R740 Compute Rack',
            os: 'Ubuntu 24.04 LTS + NVIDIA CUDA Toolkit 12.6',
            software: 'Python 3.12, PyTorch, JupyterLab, Docker Engine, Minikube, PostgreSQL'
          },
          status: 'maintenance'
        }
      ],
      jadwalRutin: [
        {
          id: 101,
          lab_id: 1,
          hari: todayDow,
          jam_mulai: '07:00',
          jam_selesai: '09:00',
          mata_kuliah: 'Framework Web Programming',
          kelas: 'Class D',
          pengampu: 'Informatics Lab Team'
        },
        {
          id: 102,
          lab_id: 1,
          hari: todayDow,
          jam_mulai: '13:00',
          jam_selesai: '15:00',
          mata_kuliah: 'Object-Oriented Programming',
          kelas: 'Class A',
          pengampu: 'Informatics Lab Team'
        },
        {
          id: 103,
          lab_id: 2,
          hari: todayDow,
          jam_mulai: '09:00',
          jam_selesai: '11:00',
          mata_kuliah: 'Operating Systems Practicum',
          kelas: 'Class A',
          pengampu: 'Networking Lab Team'
        },
        {
          id: 104,
          lab_id: 3,
          hari: todayDow,
          jam_mulai: '15:00',
          jam_selesai: '17:00',
          mata_kuliah: 'Interaction Design & Multimedia',
          kelas: 'Class B',
          pengampu: 'Multimedia Lab Team'
        },
        {
          id: 105,
          lab_id: 1,
          hari: ((todayDow % 6) + 1),
          jam_mulai: '09:00',
          jam_selesai: '11:00',
          mata_kuliah: 'Advanced Databases',
          kelas: 'Class C',
          pengampu: 'Informatics Lab Team'
        }
      ],
      reservasis: [
        {
          id: 501,
          kode_tiket: 'LS-2026-0101',
          pemohon_nama: 'Bagas Prakoso',
          pemohon_nim: 'L200240081',
          lab_id: 1,
          tanggal: today,
          jam_mulai: '15:00',
          jam_selesai: '17:00',
          peserta: 3,
          keperluan: 'Web Programming final project application development',
          anggota: 'Bagas Prakoso (L200240081), Tegar Saputra (L200240092)',
          status: 'approved',
          catatan_laboran: 'Approved. Pick up room key in technician office floor 2 with student ID.'
        },
        {
          id: 502,
          kode_tiket: 'LS-2026-0102',
          pemohon_nama: 'Bagas Prakoso',
          pemohon_nim: 'L200240081',
          lab_id: 2,
          tanggal: tomorrow,
          jam_mulai: '13:00',
          jam_selesai: '15:00',
          peserta: 4,
          keperluan: 'MikroTik static routing & firewall configuration lab',
          anggota: 'Bagas Prakoso (L200240081), Nadia Larasati (L200240147)',
          status: 'pending',
          catatan_laboran: ''
        },
        {
          id: 503,
          kode_tiket: 'LS-2026-0103',
          pemohon_nama: 'Hendra Wijaya',
          pemohon_nim: 'L200230094',
          lab_id: 3,
          tanggal: today,
          jam_mulai: '11:00',
          jam_selesai: '13:00',
          peserta: 5,
          keperluan: '3D graphics rendering and group project UI testing',
          anggota: 'Hendra Wijaya (L200230094), 4 Team Members',
          status: 'pending',
          catatan_laboran: ''
        }
      ]
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return createDefaultState();
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.labs) || !Array.isArray(parsed.reservasis) || !Array.isArray(parsed.users)) {
        return createDefaultState();
      }
      if (parsed.lang !== 'en' && parsed.lang !== 'id') parsed.lang = 'en';
      if (!parsed.selectedDate || parsed.selectedDate < getWibNow().isoDate) {
        parsed.selectedDate = getWibNow().isoDate;
      }
      if (!parsed.calendarMode) parsed.calendarMode = 'daily';
      if (!parsed.monitoringTab) parsed.monitoringTab = '1';
      if (parsed.roomSubTab !== 'schedule' && parsed.roomSubTab !== 'specs') parsed.roomSubTab = 'schedule';
      if (typeof parsed.searchQuery !== 'string') parsed.searchQuery = '';
      if (!Array.isArray(parsed.notifReadKeys)) parsed.notifReadKeys = [];
      if (!parsed.verifFilter) parsed.verifFilter = 'all';
      if (typeof parsed.verifSearch !== 'string') parsed.verifSearch = '';
      if (typeof parsed.jadwalSearch !== 'string') parsed.jadwalSearch = '';
      if (!parsed.jadwalLabFilter) parsed.jadwalLabFilter = 'all';
      if (!parsed.jadwalDayFilter) parsed.jadwalDayFilter = 'all';
      if (!parsed.verifLabFilter) parsed.verifLabFilter = 'all';
      if (!parsed.rekapPeriod) parsed.rekapPeriod = 'all';
      if (typeof parsed.userSearch !== 'string') parsed.userSearch = '';
      if (!parsed.supportMode) parsed.supportMode = 'ai';
      if (!Array.isArray(parsed.aiMessages)) parsed.aiMessages = [];
      if (!Array.isArray(parsed.csMessages) || parsed.csMessages.length === 0) {
        parsed.csMessages = createDefaultState().csMessages;
      }
      const defaultLabs = createDefaultState().labs;
      const legacySpecs = new Set([
        '40 PC Core i7, 16GB RAM, Dual Boot Windows & Ubuntu',
        '36 PC Core i5, Routerboard MikroTik, Switch Cisco',
        '32 PC Core i7, GPU RTX 3060, Color Calibrated Display',
        '30 Workstation Ryzen 7, 32GB RAM, Python & CUDA Ready'
      ]);
      parsed.labs.forEach((lab) => {
        const defLab = defaultLabs.find((d) => d.id === lab.id || d.kode === lab.kode);
        if (defLab) {
          if (!lab.photo) lab.photo = defLab.photo;
          if (!lab.lantai) lab.lantai = defLab.lantai;
          if (!lab.specsDetail) lab.specsDetail = defLab.specsDetail;
          if (legacySpecs.has(lab.spesifikasi)) lab.spesifikasi = defLab.spesifikasi;
        }
      });
      const defaultUsers = createDefaultState().users;
      parsed.users.forEach((u) => {
        const def = defaultUsers.find((d) => d.id === u.id || d.nim === u.nim);
        if (typeof u.prodi !== 'string' || !u.prodi.trim()) {
          u.prodi = def ? def.prodi : (u.role === 'laboran' ? 'Unit Laboratorium FKI' : 'Teknik Informatika');
        }
        if (typeof u.phone !== 'string') {
          u.phone = def ? def.phone : '';
        }
      });
      return parsed;
    } catch {
      return createDefaultState();
    }
  }

  let state = loadState();
  let lastFocusedTrigger = null;
  let confirmCallback = null;
  let pendingAuthCallback = null;
  let lenisInstance = null;
  let gsapCtx = null;

  function labDisplayName(lab) {
    if (!lab) return '-';
    return isId() && lab.namaId ? lab.namaId : lab.nama;
  }

  function currentUser() {
    if (!state.currentUserId) return null;
    return state.users.find((u) => u.id === state.currentUserId) || null;
  }

  function currentRole() {
    const u = currentUser();
    return u ? u.role : 'guest';
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function showGlobalFeedback(message, type = 'ok') {
    const stack = document.getElementById('toast-stack');
    if (stack) {
      const toast = document.createElement('div');
      const iconSvg =
        type === 'error'
          ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>'
          : type === 'warn'
          ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
          : type === 'info'
          ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
          : '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
      const cls = type === 'error' ? 'is-error' : type === 'warn' ? 'is-warn' : type === 'info' ? 'is-info' : '';
      toast.className = `toast-item ${cls}`.trim();
      toast.innerHTML = `<div class="toast-body"><span class="toast-icon">${iconSvg}</span><span>${escapeHtml(message)}</span></div><button type="button" class="toast-close" aria-label="Close notification">✕</button><span class="toast-progress" aria-hidden="true"></span>`;
      const removeToast = () => {
        if (!toast.isConnected || toast.classList.contains('is-leaving')) return;
        toast.classList.add('is-leaving');
        window.setTimeout(() => toast.remove(), 220);
      };
      toast.querySelector('.toast-close').addEventListener('click', removeToast);
      while (stack.children.length >= 2) {
        stack.firstElementChild.remove();
      }
      stack.appendChild(toast);
      window.setTimeout(removeToast, 4200);
      return;
    }
    const box = document.getElementById('global-feedback');
    box.className = `alert-box ${type === 'error' ? 'alert-error' : 'alert-ok'}`;
    box.textContent = message;
    box.hidden = false;
    window.clearTimeout(showGlobalFeedback._timer);
    showGlobalFeedback._timer = window.setTimeout(() => {
      box.hidden = true;
    }, 5000);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    const btn = document.getElementById('btn-theme-toggle');
    if (btn) {
      if (theme === 'dark') {
        btn.setAttribute('aria-label', isId() ? 'Ganti ke mode terang' : 'Switch to light mode');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.setAttribute('aria-label', isId() ? 'Ganti ke mode gelap' : 'Switch to dark mode');
        btn.setAttribute('aria-pressed', 'false');
      }
    }
  }

  function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    root.classList.add('theme-transitioning');
    applyTheme(next);
    window.clearTimeout(toggleTheme._timer);
    toggleTheme._timer = window.setTimeout(() => {
      root.classList.remove('theme-transitioning');
    }, 340);
  }

  function applyI18n(announce = false, { render = true } = {}) {
    document.documentElement.lang = isId() ? 'id' : 'en';
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === state.lang);
    });
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const val = tr(key);
      if (key === 'quick_fill_hint') {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', tr(el.dataset.i18nPlaceholder));
    });
    document.querySelectorAll('[data-i18n-words]').forEach((el) => {
      const text = tr(el.dataset.i18nWords);
      el.dataset.rawText = text;
      splitWordsForReveal(el, text);
    });

    populateSelects();
    updateHeaderAndCounts();
    if (render) {
      if (state.activeView === 'landing') {
        renderLanding({ animate: false });
        setupLandingScrollAnimations();
      }
      if (state.activeView === 'monitoring') renderMonitoring({ animate: false });
      if (state.activeView === 'reservasi') renderReservationFormContext();
      if (state.activeView === 'riwayat') renderMineTable();
      if (state.activeView === 'laboran') renderLaboranPanels();
      if (state.activeView === 'finder') renderSmartFinder();
      if (state.activeView === 'labs') renderStudentLabsDirectory();
      if (state.activeView === 'tickets') renderTicketWallet();
    }
  }

  /* Motion, scroll, and reveal setup */
  function splitWordsForReveal(el, text) {
    if (!el) return;
    const raw = (text || el.dataset.rawText || el.textContent || '').trim();
    el.dataset.rawText = raw;
    el.setAttribute('aria-label', raw);
    const words = raw.split(/\s+/).filter(Boolean);
    el.innerHTML = words
      .map((w) => `<span class="word-mask" aria-hidden="true"><span class="word-inner">${escapeHtml(w)}</span></span>`)
      .join(' ');
  }

  function initSmoothScroll() {
    if (typeof window.Lenis !== 'function') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (lenisInstance) return;
    lenisInstance = new window.Lenis({
      lerp: 0.14,
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: false,
      prevent: (node) => Boolean(node && node.closest && node.closest('.modal-backdrop, .mobile-drawer, .notif-popover, .user-menu-popover'))
    });
    if (window.ScrollTrigger) {
      lenisInstance.on('scroll', () => {
        if (state.activeView === 'landing') window.ScrollTrigger.update();
      });
    }
    const raf = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  function setupLandingScrollAnimations() {
    if (!window.gsap) return;
    if (window.ScrollTrigger) window.gsap.registerPlugin(window.ScrollTrigger);
    if (gsapCtx) {
      gsapCtx.revert();
      gsapCtx = null;
    }

    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || state.activeView !== 'landing') {
      document.querySelectorAll('.word-inner').forEach((w) => {
        w.style.transform = 'none';
        w.style.opacity = '1';
      });
      return;
    }

    gsapCtx = window.gsap.context(() => {
      const heroWords = document.querySelectorAll('#hero-title .word-inner');
      if (heroWords.length) {
        window.gsap.fromTo(
          heroWords,
          { yPercent: 105, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.04, ease: 'power3.out', clearProps: 'transform,willChange' }
        );
      }

      document.querySelectorAll('.word-reveal:not(#hero-title)').forEach((heading) => {
        const words = heading.querySelectorAll('.word-inner');
        if (!words.length) return;
        window.gsap.fromTo(
          words,
          { yPercent: 105, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.035,
            ease: 'power3.out',
            clearProps: 'transform,willChange',
            scrollTrigger: {
              trigger: heading,
              start: 'top 86%',
              once: true
            }
          }
        );
      });

      const stepCards = Array.from(document.querySelectorAll('.workflow-step-card'));
      const progressBar = document.getElementById('pinned-progress-bar');
      const stepNumEl = document.getElementById('pinned-step-num');
      const stepCapEl = document.getElementById('pinned-step-caption');
      const stepKeys = ['step1_title', 'step2_title', 'step3_title', 'step4_title'];

      const activateStep = (idx) => {
        const clamped = Math.max(0, Math.min(stepCards.length - 1, idx));
        stepCards.forEach((c, i) => c.classList.toggle('is-active', i === clamped));
        if (progressBar) progressBar.style.width = `${((clamped + 1) / stepCards.length) * 100}%`;
        if (stepNumEl) stepNumEl.textContent = `0${clamped + 1} / 0${stepCards.length}`;
        if (stepCapEl) stepCapEl.textContent = tr(stepKeys[clamped]);
      };

      let isHoveringSteps = false;
      const stepsList = document.getElementById('pinned-steps-list');
      if (stepsList) {
        stepsList.onmouseenter = () => { isHoveringSteps = true; };
        stepsList.onmouseleave = () => { isHoveringSteps = false; };
      }
      stepCards.forEach((card, i) => {
        card.setAttribute('tabindex', '0');
        card.onmouseenter = () => { isHoveringSteps = true; activateStep(i); };
        card.onfocus = () => activateStep(i);
        card.onclick = () => {
          activateStep(i);
          if (i === 0) switchView('monitoring', card);
          else if (i === 1) switchView('reservasi', card);
          else if (i === 2) switchView(currentRole() === 'laboran' ? 'laboran' : 'monitoring', card);
          else if (i === 3) switchView(currentRole() === 'mahasiswa' ? 'riwayat' : 'monitoring', card);
        };
      });

      if (window.ScrollTrigger && stepCards.length) {
        const mm = window.gsap.matchMedia();
        mm.add('(min-width: 900px)', () => {
          const pinnedWrap = document.getElementById('landing-pinned-wrap');
          if (!pinnedWrap) return;

          window.ScrollTrigger.create({
            trigger: pinnedWrap,
            start: 'top 58%',
            end: 'bottom 58%',
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (isHoveringSteps) return;
              const idx = Math.min(stepCards.length - 1, Math.floor(self.progress * stepCards.length));
              activateStep(idx);
            }
          });
        });

        mm.add('(max-width: 899px)', () => {
          stepCards.forEach((card, i) => {
            window.ScrollTrigger.create({
              trigger: card,
              start: 'top 68%',
              end: 'bottom 35%',
              onEnter: () => activateStep(i),
              onEnterBack: () => activateStep(i)
            });
          });
        });
      }
    });

    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh();
    }
  }

  function animateCardsWithMotion(selector) {
    if (!window.Motion || typeof window.Motion.animate !== 'function') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    window.Motion.animate(
      els,
      { opacity: [0, 1], y: [14, 0] },
      { duration: 0.36, delay: window.Motion.stagger(0.055), easing: [0.22, 1, 0.36, 1] }
    );
  }

  /* Slot collision validation */
  function checkReservationConflict({ labId, tanggal, jamMulai, jamSelesai, peserta, excludeResId = null }) {
    const lab = state.labs.find((l) => l.id === Number(labId));
    if (!lab) return { ok: false, reason: isId() ? 'Ruang laboratorium tidak ditemukan.' : 'Laboratory room not found.' };
    if (lab.status === 'maintenance') {
      return {
        ok: false,
        reason: isId()
          ? `Ruang ${lab.kode} (${labDisplayName(lab)}) sedang dalam status maintenance.`
          : `Room ${lab.kode} (${labDisplayName(lab)}) is currently under maintenance.`
      };
    }
    if (!tanggal || !jamMulai || !jamSelesai) {
      return { ok: false, reason: isId() ? 'Tanggal, jam mulai, dan jam selesai wajib diisi.' : 'Date, start time, and end time are required.' };
    }
    const wib = getWibNow();
    const wibToday = wib.isoDate;
    if (tanggal < wibToday) {
      return {
        ok: false,
        reason: isId()
          ? 'Tanggal pemakaian sudah lewat. Pilih tanggal hari ini atau mendatang.'
          : 'Selected date is in the past. Please choose today or an upcoming date.'
      };
    }
    if (tanggal === wibToday && timeToMin(jamSelesai) <= wib.minutes) {
      return {
        ok: false,
        reason: isId()
          ? `Slot ${jamMulai} - ${jamSelesai} hari ini sudah berlalu (sekarang ${wib.hhmm} WIB).`
          : `Today's ${jamMulai} - ${jamSelesai} slot has already passed (now ${wib.hhmm} WIB).`
      };
    }
    if (getDayIndex(tanggal) === 0) {
      return {
        ok: false,
        reason: isId()
          ? 'Laboratorium tidak beroperasi pada hari Minggu (layanan Senin - Sabtu).'
          : 'Laboratories are closed on Sundays (operating Mon - Sat).'
      };
    }
    if (timeToMin(jamSelesai) <= timeToMin(jamMulai)) {
      return { ok: false, reason: isId() ? 'Jam selesai harus lebih besar dari jam mulai.' : 'End time must be later than start time.' };
    }
    if (Number(peserta) < 1 || Number(peserta) > lab.kapasitas) {
      return {
        ok: false,
        reason: isId()
          ? `Jumlah peserta (${peserta}) melebihi kapasitas maksimal ${lab.kode} (${lab.kapasitas} PC).`
          : `Participants (${peserta}) exceed maximum capacity of ${lab.kode} (${lab.kapasitas} PCs).`
      };
    }

    const dow = getDayIndex(tanggal);
    const clashRutin = state.jadwalRutin.find(
      (j) => j.lab_id === lab.id && j.hari === dow && isOverlap(jamMulai, jamSelesai, j.jam_mulai, j.jam_selesai)
    );
    if (clashRutin) {
      return {
        ok: false,
        reason: isId()
          ? `Bentrok dengan jadwal praktikum rutin: ${clashRutin.mata_kuliah} (${clashRutin.kelas}) pukul ${clashRutin.jam_mulai} - ${clashRutin.jam_selesai}.`
          : `Conflicts with routine practicum: ${clashRutin.mata_kuliah} (${clashRutin.kelas}) at ${clashRutin.jam_mulai} - ${clashRutin.jam_selesai}.`
      };
    }

    const clashRes = state.reservasis.find(
      (r) =>
        r.id !== excludeResId &&
        r.lab_id === lab.id &&
        r.tanggal === tanggal &&
        (r.status === 'approved' || r.status === 'pending') &&
        isOverlap(jamMulai, jamSelesai, r.jam_mulai, r.jam_selesai)
    );
    if (clashRes) {
      const labelStatus = isId()
        ? (clashRes.status === 'approved' ? 'sudah disetujui' : 'menunggu persetujuan')
        : (clashRes.status === 'approved' ? 'already approved' : 'pending verification');
      return {
        ok: false,
        reason: isId()
          ? `Bentrok dengan reservasi ${clashRes.kode_tiket} (${labelStatus}) pukul ${clashRes.jam_mulai} - ${clashRes.jam_selesai}.`
          : `Conflicts with reservation ${clashRes.kode_tiket} (${labelStatus}) at ${clashRes.jam_mulai} - ${clashRes.jam_selesai}.`
      };
    }

    return {
      ok: true,
      reason: isId()
        ? `Slot tersedia di ${lab.kode} pada ${formatDisplayDate(tanggal)} pukul ${jamMulai} - ${jamSelesai}.`
        : `Slot available in ${lab.kode} on ${formatDisplayDate(tanggal)} at ${jamMulai} - ${jamSelesai}.`
    };
  }

  function populateSelects() {
    const labSelects = ['res-lab', 'edit-res-lab', 'jadwal-crud-lab', 'admin-book-lab'];
    labSelects.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const prev = el.value;
      el.innerHTML = state.labs
        .map((l) => `<option value="${l.id}">${escapeHtml(l.kode)} - ${escapeHtml(labDisplayName(l))} (${l.kapasitas} PC${l.status === 'maintenance' ? ', Maintenance' : ''})</option>`)
        .join('');
      if (prev && state.labs.some((l) => String(l.id) === prev)) el.value = prev;
    });

    const startOpts = TIME_OPTIONS.slice(0, -1).map((t) => `<option value="${t}">${t}</option>`).join('');
    const endOpts = TIME_OPTIONS.slice(1).map((t) => `<option value="${t}">${t}</option>`).join('');

    ['res-mulai', 'edit-res-mulai', 'jadwal-crud-mulai', 'admin-book-mulai'].forEach((id) => {
      const el = document.getElementById(id);
      if (el && !el.innerHTML) el.innerHTML = startOpts;
    });
    ['res-selesai', 'edit-res-selesai', 'jadwal-crud-selesai', 'admin-book-selesai'].forEach((id) => {
      const el = document.getElementById(id);
      if (el && !el.innerHTML) el.innerHTML = endOpts;
    });

    const jadwalLabFilterEl = document.getElementById('admin-jadwal-lab-filter');
    if (jadwalLabFilterEl) {
      const prevFilter = state.jadwalLabFilter || 'all';
      jadwalLabFilterEl.innerHTML = `<option value="all">${isId() ? 'Semua Lab' : 'All Labs'}</option>` + state.labs
        .map((l) => `<option value="${l.id}">${escapeHtml(l.kode)} - ${escapeHtml(labDisplayName(l))}</option>`)
        .join('');
      jadwalLabFilterEl.value = prevFilter === 'all' || state.labs.some((l) => String(l.id) === prevFilter) ? prevFilter : 'all';
    }

    const verifLabFilterEl = document.getElementById('admin-verif-lab-filter');
    if (verifLabFilterEl) {
      const prevV = state.verifLabFilter || 'all';
      verifLabFilterEl.innerHTML = `<option value="all">${isId() ? 'Semua Lab' : 'All Labs'}</option>` + state.labs
        .map((l) => `<option value="${l.id}">${escapeHtml(l.kode)}</option>`)
        .join('');
      verifLabFilterEl.value = prevV === 'all' || state.labs.some((l) => String(l.id) === prevV) ? prevV : 'all';
    }
  }

  function switchAuthTab(tab) {
    switchView(tab === 'register' ? 'register' : 'login');
  }

  function openAuthModal(tab = 'login', triggerEl = null, onSuccess = null) {
    pendingAuthCallback = onSuccess;
    ['login-password', 'reg-password'].forEach((pwId) => {
      const el = document.getElementById(pwId);
      if (el) el.type = 'password';
    });
    const loginErr = document.getElementById('login-error');
    const regErr = document.getElementById('register-error');
    if (loginErr) loginErr.hidden = true;
    if (regErr) regErr.hidden = true;
    switchView(tab === 'register' ? 'register' : 'login', triggerEl);
  }

  function updateHeaderAndCounts() {
    const user = currentUser();
    const role = currentRole();
    const isLogged = Boolean(user);
    const isMahasiswa = role === 'mahasiswa';
    const isLaboran = role === 'laboran';

    const myCount = isMahasiswa ? state.reservasis.filter((r) => r.pemohon_nim === user.nim).length : 0;
    const pendingCount = state.reservasis.filter((r) => r.status === 'pending').length;

    document.body.classList.toggle('is-authenticated', isLogged);
    const routePill = document.getElementById('header-route-pill');
    const drawerNavWrap = document.getElementById('drawer-nav-wrap');
    const cfSidebar = document.getElementById('cf-sidebar');
    if (routePill) routePill.hidden = !isLogged;
    if (drawerNavWrap) drawerNavWrap.hidden = !isLogged;
    if (cfSidebar) cfSidebar.hidden = !isLogged;
    if (!isLogged) document.body.classList.remove('sidebar-collapsed');

    document.getElementById('nav-count-mine').textContent = String(myCount);
    document.getElementById('nav-count-pending').textContent = String(pendingCount);
    document.getElementById('ltab-count-pending').textContent = String(pendingCount);
    const ltabUsersCount = document.getElementById('ltab-count-users');
    if (ltabUsersCount) ltabUsersCount.textContent = String(state.users.length);

    document.getElementById('nav-tab-landing').hidden = isLogged;
    document.getElementById('nav-tab-reservasi').hidden = isLaboran;
    document.getElementById('nav-tab-riwayat').hidden = !isMahasiswa;
    document.getElementById('nav-tab-laboran').hidden = !isLaboran;

    if (isLogged) {
      renderDrawerNav({ isMahasiswa, isLaboran, myCount, pendingCount });
      renderCloudflareSidebar({ isMahasiswa, isLaboran, myCount, pendingCount });
    }

    document.getElementById('mob-nav-reservasi').hidden = isLaboran;
    document.getElementById('mob-nav-riwayat').hidden = !isMahasiswa;
    document.getElementById('mob-nav-laboran').hidden = !isLaboran;
    document.getElementById('mob-nav-auth').hidden = isLogged;

    const hSearchWrap = document.getElementById('header-search-wrap');
    if (hSearchWrap) hSearchWrap.hidden = !isLogged;
    document.getElementById('header-lang-guest').hidden = false;
    document.getElementById('btn-theme-toggle').hidden = false;
    document.getElementById('auth-guest-actions').hidden = isLogged;
    document.getElementById('notif-wrap').hidden = !isLogged;
    document.getElementById('user-menu-wrap').hidden = !isLogged;
    if (isLogged) renderNotifications();

    document.getElementById('drawer-guest-actions').hidden = isLogged;
    document.getElementById('mob-btn-logout').hidden = !isLogged;
    const mobEditBtn = document.getElementById('mob-btn-edit-profile');
    if (mobEditBtn) mobEditBtn.hidden = !isLogged;

    const name = user ? user.name : (isId() ? 'Pengunjung' : 'Guest');
    const sub = user ? (isLaboran ? (isId() ? 'Admin Laboran FKI' : 'Lab Technician FKI') : user.nim) : (isId() ? 'Belum masuk' : 'Not signed in');
    const charSvg = buildCharacterAvatarSvg(resolveUserAvatarStyle(user));
    document.getElementById('user-name').textContent = name;
    document.getElementById('user-nim').textContent = sub;
    document.getElementById('user-avatar').innerHTML = `${charSvg}<span class="user-online-dot"></span>`;
    const drawerAv = document.getElementById('drawer-avatar');
    if (drawerAv) drawerAv.innerHTML = charSvg;
    const menuName = document.getElementById('menu-user-name');
    const menuNim = document.getElementById('menu-user-nim');
    const menuAv = document.getElementById('menu-user-avatar');
    const menuEmail = document.getElementById('menu-user-email');
    const menuRolePill = document.getElementById('menu-user-role-pill');
    const menuStat1Val = document.getElementById('menu-stat-1-val');
    const menuStat1Lbl = document.getElementById('menu-stat-1-lbl');
    const menuStat2Val = document.getElementById('menu-stat-2-val');
    const menuStat2Lbl = document.getElementById('menu-stat-2-lbl');
    const roleShortcutLbl = document.getElementById('menu-role-shortcut-lbl');

    if (menuName) menuName.textContent = name;
    if (menuNim) menuNim.textContent = user ? user.nim : sub;
    if (menuAv) {
      menuAv.innerHTML = `${charSvg}<span class="user-online-dot"></span>`;
    }
    if (menuEmail) {
      menuEmail.textContent = user ? user.email : 'guest@ums.ac.id';
    }
    if (menuRolePill) {
      menuRolePill.textContent = isLaboran
        ? (isId() ? 'Admin Laboran' : 'Lab Admin')
        : (isId() ? 'Mahasiswa' : 'Student');
      menuRolePill.classList.toggle('is-admin', isLaboran);
    }
    if (menuStat1Val && menuStat1Lbl && menuStat2Val && menuStat2Lbl) {
      if (isLaboran) {
        const opLabs = state.labs.filter((l) => l.status !== 'maintenance').length;
        menuStat1Val.textContent = String(pendingCount);
        menuStat1Lbl.textContent = isId() ? 'Antrean Verifikasi' : 'Pending Queue';
        menuStat2Val.textContent = `${opLabs}/${state.labs.length}`;
        menuStat2Lbl.textContent = isId() ? 'Lab Operasional' : 'Active Labs';
      } else {
        const myList = user ? state.reservasis.filter((r) => r.user_id === user.id || r.pemohon_nim === user.nim) : [];
        const activeMine = myList.filter((r) => r.status === 'pending' || r.status === 'approved').length;
        const approvedMine = myList.filter((r) => r.status === 'approved').length;
        menuStat1Val.textContent = String(activeMine);
        menuStat1Lbl.textContent = isId() ? 'Booking Aktif' : 'Active Bookings';
        menuStat2Val.textContent = String(approvedMine);
        menuStat2Lbl.textContent = isId() ? 'E-Tiket Siap' : 'Ready E-Tickets';
      }
    }
    if (roleShortcutLbl) {
      roleShortcutLbl.textContent = isLaboran
        ? tr('nav_admin')
        : (isId() ? 'Reservasi & E-Tiket Saya' : 'My Bookings & E-Tickets');
    }
    document.getElementById('drawer-user-name').textContent = name;
    document.getElementById('drawer-user-nim').textContent = sub;

    const guard = document.getElementById('laboran-role-guard');
    const ws = document.getElementById('laboran-workspace');
    if (guard) guard.hidden = isLaboran;
    ws.hidden = !isLaboran;
  }

  function renderDrawerNav({ isMahasiswa, isLaboran, myCount, pendingCount }) {
    const list = document.getElementById('drawer-nav-list');
    if (!list) return;
    const item = (label, view, ltab = '', badge = null) => {
      const active = ltab
        ? state.activeView === 'laboran' && state.activeLaboranTab === ltab
        : state.activeView === view;
      return `<button type="button" class="drawer-nav-item ${active ? 'is-active' : ''}" data-drawer-view="${view}" ${ltab ? `data-drawer-ltab="${ltab}"` : ''}>
        <span>${escapeHtml(label)}</span>
        ${badge !== null ? `<span class="nav-count">${badge}</span>` : ''}
      </button>`;
    };
    if (isLaboran) {
      list.innerHTML = `
        ${item(tr('nav_availability'), 'monitoring')}
        <div class="drawer-nav-section">${escapeHtml(tr('nav_admin'))}</div>
        ${item(tr('ltab_verif'), 'laboran', 'verifikasi', pendingCount)}
        ${item(tr('ltab_labs'), 'laboran', 'labs')}
        ${item(tr('ltab_jadwal'), 'laboran', 'jadwal')}
        ${item(tr('ltab_rekap'), 'laboran', 'rekap')}
        ${item(tr('ltab_users'), 'laboran', 'users', state.users.length)}
      `;
    } else if (isMahasiswa) {
      const readyTickets = state.reservasis.filter((r) => r.pemohon_nim === currentUser()?.nim && r.status === 'approved').length;
      list.innerHTML = `
        ${item(tr('nav_availability'), 'monitoring')}
        ${item(tr('nav_book'), 'reservasi')}
        ${item(tr('nav_my_bookings'), 'riwayat', '', myCount)}
        <div class="drawer-nav-section">${escapeHtml(tr('cf_group_student_tools'))}</div>
        ${item(tr('nav_finder'), 'finder')}
        ${item(tr('nav_labs_dir'), 'labs')}
        ${item(tr('nav_tickets'), 'tickets', '', readyTickets)}
      `;
    } else {
      list.innerHTML = '';
    }
  }

  function renderCloudflareSidebar({ isMahasiswa, isLaboran, myCount, pendingCount }) {
    const nav = document.getElementById('cf-sidebar-nav');
    const titleEl = document.getElementById('cf-sidebar-account-title');
    if (!nav) return;
    if (titleEl) {
      titleEl.textContent = isLaboran
        ? (isId() ? 'Admin Gedung J' : 'Admin · Building J')
        : (isId() ? 'Mahasiswa FKI' : 'Student · Building J');
    }

    const icons = {
      home: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
      calendar: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
      plus: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
      ticket: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
      check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
      room: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M3 9h6"/></svg>',
      clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      chart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
      users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      finder: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
      qr: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM18 18h3v3h-3zM14 20h2"/></svg>',
      help: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
    };

    const row = (label, icon, view, ltab = '', badge = null) => {
      const active = ltab
        ? state.activeView === 'laboran' && state.activeLaboranTab === ltab
        : state.activeView === view;
      return `<button type="button" class="cf-nav-item ${active ? 'is-active' : ''}" data-cf-view="${view}" ${ltab ? `data-cf-ltab="${ltab}"` : ''} title="${escapeHtml(label)}">
        <span class="cf-nav-item-main">${icons[icon] || ''}<span class="cf-item-label">${escapeHtml(label)}</span></span>
        ${badge !== null ? `<span class="cf-nav-badge">${badge}</span>` : ''}
      </button>`;
    };

    if (isLaboran) {
      const wsRows = [
        row(tr('nav_availability'), 'calendar', 'monitoring')
      ].filter(Boolean).join('');
      const adminRows = [
        row(tr('ltab_verif'), 'check', 'laboran', 'verifikasi', pendingCount),
        row(tr('ltab_labs'), 'room', 'laboran', 'labs'),
        row(tr('ltab_jadwal'), 'clock', 'laboran', 'jadwal'),
        row(tr('ltab_rekap'), 'chart', 'laboran', 'rekap'),
        row(tr('ltab_users'), 'users', 'laboran', 'users', state.users.length)
      ].filter(Boolean).join('');
      nav.innerHTML = `
        ${wsRows ? `<div class="cf-nav-group-label">${escapeHtml(tr('cf_group_workspace'))}</div>${wsRows}` : ''}
        ${wsRows && adminRows ? '<div class="cf-nav-divider"></div>' : ''}
        ${adminRows ? `<div class="cf-nav-group-label">${escapeHtml(tr('cf_group_admin'))}</div>${adminRows}` : ''}
      `;
    } else if (isMahasiswa) {
      const readyTickets = state.reservasis.filter((r) => r.pemohon_nim === currentUser()?.nim && r.status === 'approved').length;
      const mRows = [
        row(tr('nav_availability'), 'calendar', 'monitoring'),
        row(tr('nav_book'), 'plus', 'reservasi'),
        row(tr('nav_my_bookings'), 'ticket', 'riwayat', '', myCount)
      ].filter(Boolean).join('');
      const toolRows = [
        row(tr('nav_finder'), 'finder', 'finder'),
        row(tr('nav_labs_dir'), 'room', 'labs'),
        row(tr('nav_tickets'), 'qr', 'tickets', '', readyTickets)
      ].filter(Boolean).join('');
      nav.innerHTML = `
        ${mRows ? `<div class="cf-nav-group-label">${escapeHtml(tr('cf_group_workspace'))}</div>${mRows}` : ''}
        ${mRows && toolRows ? '<div class="cf-nav-divider"></div>' : ''}
        ${toolRows ? `<div class="cf-nav-group-label">${escapeHtml(tr('cf_group_student_tools'))}</div>${toolRows}` : ''}
      `;
    } else {
      nav.innerHTML = '';
    }
  }

  const IS_FILE_PROTO = window.location.protocol === 'file:';
  const BASE_PATH = (() => {
    if (IS_FILE_PROTO) return '';
    const p = window.location.pathname || '/';
    if (p === '/labspace' || p.startsWith('/labspace/')) return '/labspace';
    if (p === '/frontend' || p.startsWith('/frontend/')) return '/frontend';
    return '';
  })();

  function assetUrl(relPath) {
    const clean = String(relPath || '')
      .replace(/^\/?labspace\//, '')
      .replace(/^\/?frontend\//, '')
      .replace(/^\/+/, '');
    if (!clean) return '';
    if (IS_FILE_PROTO) return clean;
    return `${BASE_PATH}/${clean}`;
  }

  function viewFromPath(pathname) {
    const clean = (pathname || '/').replace(/\/+$/, '') || '/';
    let rel = BASE_PATH && clean.startsWith(BASE_PATH) ? (clean.slice(BASE_PATH.length) || '/') : clean;
    if (rel === '/index.html') rel = '/';
    if (rel === '/login' || rel === '/signin') return 'login';
    if (rel === '/register' || rel === '/signup') return 'register';
    if (rel === '/schedule' || rel === '/dashboard') return 'monitoring';
    if (rel === '/book') return 'reservasi';
    if (rel === '/bookings') return 'riwayat';
    if (rel === '/console') return 'laboran';
    if (rel === '/finder') return 'finder';
    if (rel === '/labs') return 'labs';
    if (rel === '/tickets') return 'tickets';
    return 'landing';
  }

  function pathForView(viewName) {
    const prefix = BASE_PATH;
    if (viewName === 'login') return `${prefix}/login`;
    if (viewName === 'register') return `${prefix}/register`;
    if (viewName === 'monitoring') return `${prefix}/schedule`;
    if (viewName === 'reservasi') return `${prefix}/book`;
    if (viewName === 'riwayat') return `${prefix}/bookings`;
    if (viewName === 'laboran') return `${prefix}/console`;
    if (viewName === 'finder') return `${prefix}/finder`;
    if (viewName === 'labs') return `${prefix}/labs`;
    if (viewName === 'tickets') return `${prefix}/tickets`;
    return `${prefix}/`;
  }

  function updateLiveClocks() {
    const wib = getWibNow();
    const clockEl = document.getElementById('live-wib-clock');
    if (clockEl) {
      clockEl.textContent = isId() ? `Waktu kampus: ${wib.hhmm} WIB` : `Campus time: ${wib.hhmm} WIB`;
    }
    const lClock = document.getElementById('landing-wib-clock');
    if (lClock) {
      lClock.textContent = `${wib.hhmm} WIB`;
    }
  }

  function switchView(viewName, triggerEl = null, { syncHistory = true } = {}) {
    const role = currentRole();
    if ((viewName === 'login' || viewName === 'register') && role !== 'guest') {
      viewName = role === 'laboran' ? 'laboran' : 'monitoring';
    }
    if ((viewName === 'reservasi' || viewName === 'riwayat' || viewName === 'finder' || viewName === 'tickets') && role === 'guest') {
      openAuthModal('login', triggerEl, () => switchView(viewName));
      return;
    }
    if ((viewName === 'reservasi' || viewName === 'riwayat' || viewName === 'finder' || viewName === 'tickets') && role === 'laboran') {
      viewName = 'laboran';
    }

    state.activeView = viewName;
    saveState();

    if (!IS_FILE_PROTO && syncHistory && window.history && typeof window.history.pushState === 'function') {
      const targetUrl = pathForView(viewName);
      if (window.location.pathname !== targetUrl) {
        try {
          window.history.pushState({ view: viewName }, '', targetUrl);
        } catch {}
      }
    }

    const pageHead = document.getElementById('workspace-page-head');
    pageHead.hidden = viewName === 'landing' || viewName === 'login' || viewName === 'register';

    const meta = isId()
      ? {
          monitoring: {
            title: 'Ketersediaan Ruang Laboratorium',
            subtitle: 'Cek slot praktikum rutin dan jadwal terpakai per ruangan sebelum datang ke Gedung J.',
            showQuickBook: role !== 'laboran'
          },
          reservasi: {
            title: 'Ajukan Reservasi Workspace Lab',
            subtitle: 'Isi detail pemakaian lab di luar jam praktikum. Sistem mencegah jadwal bentrok secara otomatis.',
            showQuickBook: false
          },
          riwayat: {
            title: 'Daftar Reservasi Saya',
            subtitle: 'Pantau status verifikasi, ubah pengajuan pending, atau cetak surat izin PDF.',
            showQuickBook: true
          },
          laboran: {
            title: 'Pusat Kontrol Admin & Laboran',
            subtitle: 'Kelola verifikasi reservasi, master ruang lab, jadwal praktikum, dan akun pengguna secara penuh.',
            showQuickBook: false
          },
          finder: {
            title: 'Cari Slot Kosong Cerdas',
            subtitle: 'Temukan blok jam kosong berurutan sesuai durasi, kapasitas PC, dan software praktikum.',
            showQuickBook: false
          },
          labs: {
            title: 'Direktori Lab & Jadwal Praktikum',
            subtitle: 'Spesifikasi lengkap PC per ruangan beserta jadwal kuliah praktikum rutin Gedung J.',
            showQuickBook: true
          },
          tickets: {
            title: 'Dompet E-Tiket QR',
            subtitle: 'Pas QR resmi siap scan di meja Teknisi Lantai 2 Gedung J untuk pengambilan kunci ruangan.',
            showQuickBook: true
          }
        }
      : {
          monitoring: {
            title: 'Laboratory Room Availability',
            subtitle: 'Check routine practicum blocks and available hours in Building J before heading to the lab.',
            showQuickBook: role !== 'laboran'
          },
          reservasi: {
            title: 'Request Lab Workspace',
            subtitle: 'Submit lab usage details outside regular practicums. Automatic conflict protection enabled.',
            showQuickBook: false
          },
          riwayat: {
            title: 'My Lab Reservations',
            subtitle: 'Track verification status, edit pending requests, or print official PDF permits.',
            showQuickBook: true
          },
          laboran: {
            title: 'Admin Control Center',
            subtitle: 'Full access to verify requests, manage lab rooms, practicum schedules, and user accounts.',
            showQuickBook: false
          },
          finder: {
            title: 'Smart Slot Finder',
            subtitle: 'Find consecutive free time blocks filtered by duration, PC count, and required software.',
            showQuickBook: false
          },
          labs: {
            title: 'Lab Directory & Practicum Schedule',
            subtitle: 'Full hardware specs, installed tools, and weekly routine practicum classes across Building J.',
            showQuickBook: true
          },
          tickets: {
            title: 'E-Ticket QR Wallet',
            subtitle: 'Approved scannable QR passes ready for fast key pickup at the Floor 2 Technician Office.',
            showQuickBook: true
          }
        };

    const current = meta[viewName] || meta.monitoring;
    document.getElementById('workspace-title').textContent = current.title;
    document.getElementById('workspace-subtitle').textContent = current.subtitle;
    document.getElementById('btn-quick-book').hidden = !current.showQuickBook;
    updateLiveClocks();

    const pageTitleMap = isId()
      ? {
          landing: 'LabSpace TI UMS - Beranda & Alur Reservasi Lab',
          login: 'LabSpace TI UMS - Masuk ke Akun',
          register: 'LabSpace TI UMS - Daftar Akun Mahasiswa',
          monitoring: 'LabSpace TI UMS - Ketersediaan Ruang Lab',
          reservasi: 'LabSpace TI UMS - Ajukan Reservasi Lab',
          riwayat: 'LabSpace TI UMS - Reservasi Saya',
          laboran: 'LabSpace TI UMS - Pusat Kontrol Admin',
          finder: 'LabSpace TI UMS - Cari Slot Kosong Cerdas',
          labs: 'LabSpace TI UMS - Info Lab & Jadwal Praktikum',
          tickets: 'LabSpace TI UMS - Dompet E-Tiket QR'
        }
      : {
          landing: 'LabSpace TI UMS - Lab Availability & Reservation',
          login: 'LabSpace TI UMS - Sign In',
          register: 'LabSpace TI UMS - Student Registration',
          monitoring: 'LabSpace TI UMS - Lab Availability & Schedule',
          reservasi: 'LabSpace TI UMS - Book a Lab Room',
          riwayat: 'LabSpace TI UMS - My Lab Reservations',
          laboran: 'LabSpace TI UMS - Admin Control Center',
          finder: 'LabSpace TI UMS - Smart Slot Finder',
          labs: 'LabSpace TI UMS - Lab Directory & Practicum',
          tickets: 'LabSpace TI UMS - E-Ticket QR Wallet'
        };
    document.title = pageTitleMap[viewName] || pageTitleMap.landing;

    const routePill = document.getElementById('header-route-pill');
    if (routePill) {
      const pillLabels = {
        landing: tr('nav_overview'),
        login: tr('btn_sign_in'),
        register: tr('btn_register'),
        monitoring: tr('nav_availability'),
        reservasi: tr('nav_book'),
        riwayat: tr('nav_my_bookings'),
        laboran: tr('nav_admin'),
        finder: tr('nav_finder'),
        labs: tr('nav_labs_dir'),
        tickets: tr('nav_tickets')
      };
      routePill.textContent = pillLabels[viewName] || tr('nav_availability');
    }

    document.querySelectorAll('.view-panel').forEach((p) => {
      p.classList.toggle('is-active', p.id === `view-${viewName}`);
    });
    document.querySelectorAll('[data-nav]').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.nav === viewName);
    });
    if (currentUser()) {
      const role = currentRole();
      const myCount = role === 'mahasiswa' ? state.reservasis.filter((r) => r.pemohon_nim === currentUser().nim).length : 0;
      const pendingCount = state.reservasis.filter((r) => r.status === 'pending').length;
      const payload = { isMahasiswa: role === 'mahasiswa', isLaboran: role === 'laboran', myCount, pendingCount };
      renderDrawerNav(payload);
      renderCloudflareSidebar(payload);
    }

    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    if (viewName === 'landing') {
      renderLanding();
      setupLandingScrollAnimations();
    } else if (gsapCtx) {
      gsapCtx.revert();
      gsapCtx = null;
    }

    if (viewName === 'login') {
      const err = document.getElementById('login-error');
      if (err) err.hidden = true;
      const pw = document.getElementById('login-password');
      if (pw) pw.type = 'password';
      const idInp = document.getElementById('login-identity');
      if (idInp) window.setTimeout(() => idInp.focus(), 40);
    }
    if (viewName === 'register') {
      const err = document.getElementById('register-error');
      if (err) err.hidden = true;
      const pw = document.getElementById('reg-password');
      if (pw) pw.type = 'password';
      const nameInp = document.getElementById('reg-name');
      if (nameInp) window.setTimeout(() => nameInp.focus(), 40);
    }
    if (viewName === 'monitoring') renderMonitoring();
    if (viewName === 'reservasi') renderReservationFormContext();
    if (viewName === 'riwayat') renderMineTable();
    if (viewName === 'laboran') renderLaboranPanels();
    if (viewName === 'finder') renderSmartFinder();
    if (viewName === 'labs') renderStudentLabsDirectory();
    if (viewName === 'tickets') renderTicketWallet();
  }

  function computeDaySlots(lab, isoDate) {
    const dow = getDayIndex(isoDate);
    const wib = getWibNow();
    const isPastDay = isoDate < wib.isoDate;
    const isTodayDate = isoDate === wib.isoDate;
    return TIME_SLOTS.map((slot) => {
      if (lab.status === 'maintenance') {
        return { ...slot, kind: 'maintenance', title: 'Maintenance', detail: null };
      }
      if (dow === 0) {
        return { ...slot, kind: 'past', title: isId() ? 'Tutup (Minggu)' : 'Closed (Sunday)', detail: null };
      }
      const rutin = state.jadwalRutin.find(
        (j) => j.lab_id === lab.id && j.hari === dow && isOverlap(slot.start, slot.end, j.jam_mulai, j.jam_selesai)
      );
      if (rutin) {
        return { ...slot, kind: 'praktikum', title: `${rutin.mata_kuliah} (${rutin.kelas})`, detail: rutin };
      }
      const res = state.reservasis.find(
        (r) =>
          r.lab_id === lab.id &&
          r.tanggal === isoDate &&
          (r.status === 'approved' || r.status === 'pending') &&
          isOverlap(slot.start, slot.end, r.jam_mulai, r.jam_selesai)
      );
      if (res) {
        const prefix = res.status === 'approved' ? (isId() ? 'Terisi' : 'Reserved') : 'Pending';
        return {
          ...slot,
          kind: res.status === 'approved' ? 'reserved' : 'pending',
          title: `${prefix}: ${res.pemohon_nama}`,
          detail: res
        };
      }
      if (isPastDay || (isTodayDate && timeToMin(slot.end) <= wib.minutes)) {
        return { ...slot, kind: 'past', title: isId() ? 'Waktu Berlalu' : 'Elapsed', detail: null };
      }
      return { ...slot, kind: 'open', title: isId() ? 'Tersedia' : 'Available', detail: null };
    });
  }

  function getLiveLabStatus(lab, slots) {
    if (lab.status === 'maintenance') {
      return { kind: 'maintenance', cls: 'is-maintenance', label: 'Maintenance', isOpenNow: false };
    }
    const wib = getWibNow();
    const dow = getDayIndex(wib.isoDate);
    if (dow === 0) {
      return { kind: 'closed', cls: 'is-maintenance', label: isId() ? 'Tutup (Minggu)' : 'Closed (Sunday)', isOpenNow: false };
    }
    const activeRutin = state.jadwalRutin.find(
      (j) => j.lab_id === lab.id && j.hari === dow && timeToMin(j.jam_mulai) <= wib.minutes && wib.minutes < timeToMin(j.jam_selesai)
    );
    if (activeRutin) {
      return {
        kind: 'busy',
        cls: 'is-now-busy',
        label: isId() ? `Dipakai: ${activeRutin.mata_kuliah} (s.d. ${activeRutin.jam_selesai})` : `In class: ${activeRutin.mata_kuliah} (until ${activeRutin.jam_selesai})`,
        isOpenNow: false
      };
    }
    const activeRes = state.reservasis.find(
      (r) =>
        r.lab_id === lab.id &&
        r.tanggal === wib.isoDate &&
        r.status === 'approved' &&
        timeToMin(r.jam_mulai) <= wib.minutes &&
        wib.minutes < timeToMin(r.jam_selesai)
    );
    if (activeRes) {
      return {
        kind: 'reserved',
        cls: 'is-now-reserved',
        label: isId() ? `Ter-reservasi s.d. ${activeRes.jam_selesai}` : `Reserved until ${activeRes.jam_selesai}`,
        isOpenNow: false
      };
    }
    if (wib.minutes < timeToMin('07:00') || wib.minutes >= timeToMin('21:00')) {
      return {
        kind: 'closed',
        cls: 'is-maintenance',
        label: isId() ? 'Di luar jam layanan (07:00-21:00)' : 'After hours (07:00-21:00)',
        isOpenNow: false
      };
    }
    const nextBusyToday = slots.find((s) => s.kind !== 'open' && timeToMin(s.start) > wib.minutes);
    const untilLabel = nextBusyToday
      ? (isId() ? `Kosong sekarang (s.d. ${nextBusyToday.start})` : `Open now (until ${nextBusyToday.start})`)
      : (isId() ? 'Kosong sekarang (s.d. 21:00)' : 'Open now (until 21:00)');
    return { kind: 'open', cls: 'is-now-open', label: untilLabel, isOpenNow: true };
  }

  function renderLanding({ animate = true } = {}) {
    const wib = getWibNow();
    const lClock = document.getElementById('landing-wib-clock');
    if (lClock) lClock.textContent = `${wib.hhmm} WIB`;

    const activeLabs = state.labs.filter((l) => l.status === 'aktif').length;
    let totalOpenToday = 0;
    const snapItems = state.labs.map((lab) => {
      const slots = computeDaySlots(lab, wib.isoDate);
      const openCount = lab.status === 'aktif' ? slots.filter((s) => s.kind === 'open').length : 0;
      totalOpenToday += openCount;
      const liveStatus = getLiveLabStatus(lab, slots);
      return { lab, openCount, totalSlots: slots.length, liveStatus };
    });

    const statLabs = document.getElementById('hero-stat-labs');
    const statOpen = document.getElementById('hero-stat-open');
    if (statLabs) statLabs.textContent = `${activeLabs} / ${state.labs.length}`;
    if (statOpen) statOpen.textContent = String(totalOpenToday);

    const authHeroBtn = document.getElementById('btn-hero-auth');
    const authCtaBtn = document.getElementById('btn-cta-login');
    const uLogged = currentUser();
    const loggedActionLabel = uLogged
      ? (uLogged.role === 'laboran' ? tr('nav_admin') : tr('nav_book'))
      : tr('hero_cta_auth');
    if (authHeroBtn) authHeroBtn.textContent = loggedActionLabel;
    if (authCtaBtn) authCtaBtn.textContent = loggedActionLabel;

    const snapList = document.getElementById('hero-snapshot-list');
    if (snapList) {
      snapList.innerHTML = snapItems
        .map(({ lab, openCount, totalSlots, liveStatus }) => {
          const openTxt = lab.status === 'maintenance'
            ? 'Maintenance'
            : (isId() ? `${openCount}/${totalSlots} slot kosong` : `${openCount}/${totalSlots} slots open`);
          return `<button type="button" class="snapshot-row" data-jump-lab="${escapeHtml(lab.kode)}">
            <span class="snapshot-left">
              <span class="lab-code">${escapeHtml(lab.kode)}</span>
              <span>
                <span class="snapshot-title">${escapeHtml(labDisplayName(lab))}</span>
                <span class="snapshot-sub">${escapeHtml(openTxt)} &middot; ${lab.kapasitas} PC</span>
              </span>
            </span>
            <span class="lab-status-pill ${liveStatus.cls}">
              <span class="live-dot" aria-hidden="true"></span>
              <span>${escapeHtml(liveStatus.label)}</span>
            </span>
          </button>`;
        })
        .join('');
    }

    const showcaseGrid = document.getElementById('landing-labs-grid');
    if (showcaseGrid) {
      showcaseGrid.innerHTML = snapItems
        .map(({ lab, openCount, totalSlots, liveStatus }) => {
          const rawParts = lab.spesifikasi
            .split(',')
            .map((p) => p.trim())
            .filter(Boolean)
            .map((p) => p.replace(/^\d+\s*(?:PC|Workstation)\s*/i, '').trim())
            .filter(Boolean);
          const tags = [
            `<span class="lab-spec-tag is-cap">${lab.kapasitas} PC</span>`,
            ...rawParts.map((part) => `<span class="lab-spec-tag">${escapeHtml(part)}</span>`)
          ].join('');
          const openTxt = lab.status === 'maintenance'
            ? (isId() ? 'Tidak tersedia sementara' : 'Temporarily unavailable')
            : (isId() ? `${openCount} dari ${totalSlots} slot kosong hari ini` : `${openCount} of ${totalSlots} slots open today`);
          return `<article class="landing-lab-card">
            <div class="landing-lab-top">
              <div>
                <div class="lab-title-row">
                  <span class="lab-code">${escapeHtml(lab.kode)}</span>
                  <h3 class="lab-name">${escapeHtml(labDisplayName(lab))}</h3>
                </div>
                <div class="lab-spec-tags">${tags}</div>
              </div>
              <span class="lab-status-pill ${liveStatus.cls}">
                <span class="live-dot" aria-hidden="true"></span>
                <span>${escapeHtml(liveStatus.label)}</span>
              </span>
            </div>
            <div class="landing-lab-foot">
              <div class="landing-lab-meta">
                <span>${escapeHtml(openTxt)}</span>
                <span aria-hidden="true">&middot;</span>
                <span>${lab.kapasitas} PC</span>
              </div>
              <button type="button" class="btn btn-secondary btn-sm" data-jump-lab="${escapeHtml(lab.kode)}">${isId() ? 'Cek Slot' : 'Check Slots'}</button>
            </div>
          </article>`;
        })
        .join('');
      if (animate) animateCardsWithMotion('#landing-labs-grid .landing-lab-card');
    }
  }

  function getNotificationsForUser() {
    const user = currentUser();
    if (!user) return [];
    if (user.role === 'laboran') {
      return state.reservasis
        .filter((r) => r.status === 'pending')
        .map((r) => {
          const lab = state.labs.find((l) => l.id === r.lab_id);
          return {
            key: `lab-${r.id}-${r.status}`,
            title: isId()
              ? `Permohonan Baru: ${lab ? lab.kode : 'Lab'} (${r.kode_tiket})`
              : `New Request: ${lab ? lab.kode : 'Lab'} (${r.kode_tiket})`,
            meta: `${r.pemohon_nama} - ${formatDisplayDate(r.tanggal)}, ${r.jam_mulai}-${r.jam_selesai}`,
            targetView: 'laboran'
          };
        });
    }
    return state.reservasis
      .filter((r) => r.pemohon_nim === user.nim && (r.status === 'approved' || r.status === 'rejected' || r.status === 'pending'))
      .slice(0, 8)
      .map((r) => {
        const lab = state.labs.find((l) => l.id === r.lab_id);
        const title =
          r.status === 'approved'
            ? (isId() ? `Disetujui: ${lab ? lab.kode : 'Lab'} (${r.kode_tiket})` : `Approved: ${lab ? lab.kode : 'Lab'} (${r.kode_tiket})`)
            : r.status === 'rejected'
            ? (isId() ? `Ditolak: ${lab ? lab.kode : 'Lab'} (${r.kode_tiket})` : `Rejected: ${lab ? lab.kode : 'Lab'} (${r.kode_tiket})`)
            : (isId() ? `Menunggu Verifikasi: ${lab ? lab.kode : 'Lab'}` : `Pending Verification: ${lab ? lab.kode : 'Lab'}`);
        return {
          key: `mhs-${r.id}-${r.status}`,
          title,
          meta: r.catatan_laboran || `${formatDisplayDate(r.tanggal)}, ${r.jam_mulai}-${r.jam_selesai}`,
          targetView: 'riwayat',
          permitId: r.status === 'approved' ? r.id : null
        };
      });
  }

  function renderNotifications() {
    const items = getNotificationsForUser();
    const unread = items.filter((n) => !state.notifReadKeys.includes(n.key)).length;
    const badge = document.getElementById('notif-badge');
    const notifBtn = document.getElementById('btn-notif');
    const list = document.getElementById('notif-list');
    badge.hidden = unread === 0;
    badge.textContent = String(unread);
    if (notifBtn) notifBtn.classList.toggle('has-unread', unread > 0);

    if (items.length === 0) {
      list.innerHTML = `<div class="notif-item"><span>${escapeHtml(tr('notif_empty'))}</span></div>`;
      return;
    }
    list.innerHTML = items
      .map(
        (n) => `<button type="button" class="notif-item" data-notif-view="${n.targetView}" ${n.permitId ? `data-notif-permit="${n.permitId}"` : ''}>
          <strong>${escapeHtml(n.title)}</strong>
          <span>${escapeHtml(n.meta)}</span>
        </button>`
      )
      .join('');
  }

  function renderMonitoring({ animate = true } = {}) {
    const wib = getWibNow();
    const clockEl = document.getElementById('live-wib-clock');
    if (clockEl) clockEl.textContent = isId() ? `Waktu kampus: ${wib.hhmm} WIB` : `Campus time: ${wib.hhmm} WIB`;

    const dateInput = document.getElementById('filter-date');
    dateInput.value = state.selectedDate;
    document.getElementById('filter-day-name').textContent = formatDisplayDate(state.selectedDate);

    const searchInput = document.getElementById('lab-search');
    if (searchInput && searchInput.value !== state.searchQuery) {
      searchInput.value = state.searchQuery;
    }
    const clearSearchBtn = document.getElementById('btn-clear-search');
    if (clearSearchBtn) clearSearchBtn.hidden = !state.searchQuery.trim();

    document.querySelectorAll('[data-cal-mode]').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.calMode === state.calendarMode);
    });
    document.querySelectorAll('[data-lab-filter]').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.labFilter === state.labFilter);
    });

    let totalOpen = 0;
    let totalPracticum = 0;
    let totalBooked = 0;
    const activeLabsCount = state.labs.filter((l) => l.status === 'aktif').length;
    const pendingCount = state.reservasis.filter((r) => r.status === 'pending').length;

    const labData = state.labs.map((lab) => {
      const slots = computeDaySlots(lab, state.selectedDate);
      const todaySlots = state.selectedDate === wib.isoDate ? slots : computeDaySlots(lab, wib.isoDate);
      const liveStatus = getLiveLabStatus(lab, todaySlots);
      let labOpenSlots = 0;
      slots.forEach((s) => {
        if (s.kind === 'open') {
          totalOpen += 1;
          labOpenSlots += 1;
        } else if (s.kind === 'praktikum') {
          totalPracticum += 1;
        } else if (s.kind === 'reserved' || s.kind === 'pending') {
          totalBooked += 1;
        }
      });
      return { lab, slots, labOpenSlots, liveStatus };
    });

    document.getElementById('stat-total-labs').textContent = String(state.labs.length);
    document.getElementById('stat-active-labs').textContent = isId() ? `${activeLabsCount} siap digunakan` : `${activeLabsCount} operational`;
    document.getElementById('stat-open-slots').textContent = String(totalOpen);
    document.getElementById('stat-practicum-slots').textContent = String(totalPracticum);
    document.getElementById('stat-booked-slots').textContent = String(totalBooked);
    document.getElementById('stat-pending-note').textContent = isId() ? `${pendingCount} menunggu verifikasi` : `${pendingCount} pending verification`;

    const query = state.searchQuery.trim().toLowerCase();
    const filtered = labData.filter(({ lab, labOpenSlots, liveStatus }) => {
      if (state.labFilter === 'now' && !liveStatus.isOpenNow) return false;
      if (state.labFilter === 'aktif' && lab.status !== 'aktif') return false;
      if (state.labFilter === 'maintenance' && lab.status !== 'maintenance') return false;
      if (state.labFilter === 'available' && !(lab.status === 'aktif' && labOpenSlots > 0)) return false;
      if (query) {
        const hay = `${lab.kode} ${lab.nama} ${lab.namaId || ''} ${lab.spesifikasi}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });

    const filterCountEl = document.getElementById('lab-filter-count');
    if (filterCountEl) {
      filterCountEl.textContent = isId()
        ? `Menampilkan ${filtered.length} dari ${state.labs.length} ruang lab`
        : `Showing ${filtered.length} of ${state.labs.length} labs`;
    }

    const tabsEl = document.getElementById('monitoring-room-tabs');
    const container = document.getElementById('lab-monitoring-list');
    const emptyBox = document.getElementById('monitoring-empty');

    if (tabsEl) {
      const shortLabLabel = (lab) => {
        if (lab.kode === 'J.2.1') return isId() ? 'RPL' : 'SE Lab';
        if (lab.kode === 'J.2.2') return isId() ? 'Jaringan' : 'NetSec';
        if (lab.kode === 'J.2.3') return 'Multimedia';
        if (lab.kode === 'J.2.4') return isId() ? 'Data & AI' : 'AI & Data';
        const clean = labDisplayName(lab).replace(/^Lab\s+/i, '').replace(/\s+Lab$/i, '').trim();
        return clean.split(/\s+/).slice(0, 2).join(' ') || lab.kode;
      };
      const allActive = state.monitoringTab === 'all';
      const roomPills = filtered
        .map(({ lab, labOpenSlots }) => {
          const active = String(state.monitoringTab) === String(lab.id);
          const isMaint = lab.status === 'maintenance';
          const isFull = !isMaint && labOpenSlots === 0;
          const dotCls = isMaint ? ' is-maint' : isFull ? ' is-full' : '';
          const badgeCls = isMaint ? ' is-maint' : isFull ? ' is-full' : '';
          const openLabel = isMaint ? 'Maint' : `${labOpenSlots} ${isId() ? 'kosong' : 'open'}`;
          return `<button type="button" class="room-tab-btn${active ? ' is-active' : ''}" role="tab" aria-selected="${active ? 'true' : 'false'}" data-room-tab="${lab.id}" title="${escapeHtml(lab.kode)} · ${escapeHtml(labDisplayName(lab))}">
            <span class="room-tab-dot${dotCls}" aria-hidden="true"></span>
            <span class="room-tab-code">${escapeHtml(lab.kode)}</span>
            <span class="room-tab-name">${escapeHtml(shortLabLabel(lab))}</span>
            <span class="room-tab-open${badgeCls}">${openLabel}</span>
          </button>`;
        })
        .join('');
      const matrixBtn = `<button type="button" class="room-matrix-btn${allActive ? ' is-active' : ''}" role="tab" aria-selected="${allActive ? 'true' : 'false'}" data-room-tab="all">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
        <span>${isId() ? 'Tabel Matrix' : 'Matrix View'}</span>
        <span class="room-matrix-count">${filtered.length}</span>
      </button>`;
      tabsEl.innerHTML = filtered.length > 0
        ? `<div class="room-tabs-track">${roomPills}</div>${matrixBtn}`
        : '';
    }

    if (filtered.length === 0) {
      container.innerHTML = '';
      emptyBox.hidden = false;
      return;
    }

    emptyBox.hidden = true;
    const weekDates = state.calendarMode === 'weekly' ? getWeekDates(state.selectedDate) : [];
    const isTodayView = state.selectedDate === wib.isoDate;
    const langKey = isId() ? 'id' : 'en';

    const buildSlotBlocksHtml = (lab, slots) => {
      if (state.calendarMode === 'weekly') {
        const dayCards = weekDates
          .map((iso) => {
            const daySlots = computeDaySlots(lab, iso);
            const openCount = daySlots.filter((s) => s.kind === 'open').length;
            const prakCount = daySlots.filter((s) => s.kind === 'praktikum').length;
            const resCount = daySlots.filter((s) => s.kind === 'reserved' || s.kind === 'pending').length;
            const openPct = lab.status === 'maintenance' ? 0 : Math.round((openCount / TIME_SLOTS.length) * 100);
            const dObj = iso.split('-');
            const shortDay = DAY_NAMES_BY_LANG[langKey][getDayIndex(iso)].slice(0, 3);
            const isSel = iso === state.selectedDate ? 'is-selected' : '';
            const pills =
              lab.status === 'maintenance'
                ? '<span class="week-pill is-busy">Maintenance</span>'
                : `<span class="week-pill is-open">${openCount} ${isId() ? 'kosong' : 'open'}</span>` +
                  (prakCount ? `<span class="week-pill is-busy">${prakCount} ${isId() ? 'prak' : 'class'}</span>` : '') +
                  (resCount ? `<span class="week-pill is-booked">${resCount} ${isId() ? 'terisi' : 'booked'}</span>` : '');
            return `<button type="button" class="week-day-cell ${isSel}" data-pick-date="${iso}">
              <div class="week-day-head">
                <span class="week-day-name">${shortDay}</span>
                <span class="week-day-date">${dObj[2]}/${dObj[1]}</span>
              </div>
              <div class="week-day-stats">${pills}</div>
              <div class="week-bar" aria-hidden="true"><span class="week-bar-open" style="width:${openPct}%"></span></div>
            </button>`;
          })
          .join('');
        return `<div class="week-grid" role="group" aria-label="Weekly schedule ${escapeHtml(lab.kode)}">${dayCards}</div>`;
      }
      const slotHtml = slots
        .map((s) => {
          const cls =
            s.kind === 'open'
              ? 'is-open'
              : s.kind === 'praktikum'
              ? 'is-praktikum'
              : s.kind === 'reserved'
              ? 'is-reserved'
              : s.kind === 'pending'
              ? 'is-pending'
              : s.kind === 'past'
              ? 'is-past'
              : 'is-maintenance';
          const isCurrent = isTodayView && timeToMin(s.start) <= wib.minutes && wib.minutes < timeToMin(s.end);
          const dis = s.kind === 'maintenance' || s.kind === 'past' ? 'disabled' : '';
          const payload = encodeURIComponent(JSON.stringify({ labId: lab.id, start: s.start, end: s.end, kind: s.kind, detail: s.detail }));
          return `<button type="button" class="slot-cell ${cls}${isCurrent ? ' is-current-slot' : ''}" data-slot="${payload}" ${dis}>
            <div class="slot-top-row">
              <span class="slot-time">${s.start} - ${s.end}</span>
              ${isCurrent ? `<span class="slot-now-tag">${isId() ? 'Kini' : 'Now'}</span>` : ''}
            </div>
            <span class="slot-label">${escapeHtml(s.title)}</span>
          </button>`;
        })
        .join('');
      return `<div class="timeline-rail"><div class="slot-grid" role="group" aria-label="Time slots ${escapeHtml(lab.kode)}">${slotHtml}</div></div>`;
    };

    if (state.monitoringTab === 'all') {
      const rowsHtml = filtered
        .map(({ lab, slots, labOpenSlots, liveStatus }) => {
          const chips = slots
            .map((s) => {
              const cls =
                s.kind === 'open'
                  ? 'is-open'
                  : s.kind === 'praktikum'
                  ? 'is-praktikum'
                  : s.kind === 'reserved'
                  ? 'is-reserved'
                  : s.kind === 'pending'
                  ? 'is-pending'
                  : s.kind === 'past'
                  ? 'is-past'
                  : 'is-maintenance';
              const dis = s.kind === 'maintenance' || s.kind === 'past' ? 'disabled' : '';
              const payload = encodeURIComponent(JSON.stringify({ labId: lab.id, start: s.start, end: s.end, kind: s.kind, detail: s.detail }));
              return `<button type="button" class="matrix-slot-chip ${cls}" data-slot="${payload}" ${dis} title="${escapeHtml(s.title)}">${s.start}</button>`;
            })
            .join('');
          const openTxt = lab.status === 'aktif' ? `${labOpenSlots}/${slots.length}` : '0/7';
          return `<tr>
            <td data-label="${isId() ? 'Ruang Lab' : 'Lab Room'}">
              <div class="matrix-room-cell">
                ${lab.photo ? `<img src="${escapeHtml(assetUrl(lab.photo))}" alt="${escapeHtml(labDisplayName(lab))}" class="matrix-thumb" loading="lazy">` : ''}
                <div>
                  <div style="display:flex;align-items:center;gap:6px;">
                    <span class="lab-code">${escapeHtml(lab.kode)}</span>
                    <strong>${escapeHtml(labDisplayName(lab))}</strong>
                  </div>
                  <div class="field-hint">${lab.kapasitas} PC &middot; ${escapeHtml(lab.lantai || 'Gedung J · Lt. 2')}</div>
                </div>
              </div>
            </td>
            <td data-label="${isId() ? 'Status' : 'Status'}">
              <span class="lab-status-pill ${liveStatus.cls}">
                <span class="live-dot" aria-hidden="true"></span>
                <span>${escapeHtml(liveStatus.label)}</span>
              </span>
            </td>
            <td class="mono" data-label="${isId() ? 'Kosong' : 'Open'}">${openTxt}</td>
            <td data-label="${isId() ? 'Jadwal Slot' : 'Time Slots'}"><div class="matrix-slot-row">${chips}</div></td>
            <td data-label="${isId() ? 'Aksi' : 'Inspect'}">
              <button type="button" class="btn btn-secondary btn-sm" data-inspect-room="${lab.id}">${isId() ? 'Detail & Spec' : 'Room & Specs'}</button>
            </td>
          </tr>`;
        })
        .join('');
      container.innerHTML = `<div class="table-wrap lab-matrix-table">
        <table class="data-table data-table-cards">
          <thead>
            <tr>
              <th>${isId() ? 'Ruang Laboratorium' : 'Laboratory Room'}</th>
              <th>${isId() ? 'Status Saat Ini' : 'Live Status'}</th>
              <th>${isId() ? 'Slot' : 'Open'}</th>
              <th>${isId() ? 'Slot Waktu (Klik Hijau untuk Booking)' : 'Time Slots (Click Green to Book)'}</th>
              <th>${isId() ? 'Detail' : 'Details'}</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>`;
      return;
    }

    let selectedItem = filtered.find(({ lab }) => String(lab.id) === String(state.monitoringTab));
    if (!selectedItem) {
      selectedItem = filtered[0];
      state.monitoringTab = String(selectedItem.lab.id);
      if (tabsEl) {
        tabsEl.querySelectorAll('[data-room-tab]').forEach((b) => {
          const act = b.dataset.roomTab === state.monitoringTab;
          b.classList.toggle('is-active', act);
          b.setAttribute('aria-selected', act ? 'true' : 'false');
        });
      }
    }

    const { lab, slots, labOpenSlots, liveStatus } = selectedItem;
    const sd = lab.specsDetail || {};
    const specRows = [
      { k: isId() ? 'Prosesor (CPU)' : 'Processor (CPU)', v: sd.cpu || lab.spesifikasi },
      { k: isId() ? 'Memori (RAM)' : 'Memory (RAM)', v: sd.ram || '-' },
      { k: isId() ? 'Penyimpanan' : 'Storage', v: sd.storage || '-' },
      { k: isId() ? 'Grafis / NIC' : 'Graphics / NIC', v: sd.gpu || '-' },
      { k: isId() ? 'Layar Monitor' : 'Display Monitor', v: sd.display || '-' },
      { k: isId() ? 'Jaringan & Rack' : 'Network & Rack', v: sd.network || '-' },
      { k: isId() ? 'Sistem Operasi' : 'Operating System', v: sd.os || '-' },
      { k: isId() ? 'Software Terpasang' : 'Installed Software', v: sd.software || '-' }
    ];
    const specGridHtml = specRows
      .map(
        (row) => `<div class="lab-spec-row">
          <span class="lab-spec-key">${escapeHtml(row.k)}</span>
          <span class="lab-spec-val">${escapeHtml(row.v)}</span>
        </div>`
      )
      .join('');
    const subTab = state.roomSubTab === 'specs' ? 'specs' : 'schedule';
    const quickChips = [
      `<span class="lab-spec-tag is-cap">${lab.kapasitas} PC</span>`,
      sd.cpu ? `<span class="lab-spec-tag">${escapeHtml(sd.cpu.split('(')[0].trim())}</span>` : '',
      sd.ram ? `<span class="lab-spec-tag">${escapeHtml(sd.ram.split('Dual')[0].trim())}</span>` : '',
      sd.os ? `<span class="lab-spec-tag">${escapeHtml(sd.os.split('(')[0].trim())}</span>` : ''
    ].filter(Boolean).join('');

    const rightPanelBody = subTab === 'specs'
      ? `<div class="lab-spec-grid">${specGridHtml}</div>
         <div class="lab-split-foot">
           <span>${isId() ? 'Spesifikasi standar seluruh workstation aktif di ruangan ini.' : 'Standard hardware & software image deployed across workstations in this room.'}</span>
           <span class="mono">${lab.kapasitas} ${isId() ? 'Unit PC' : 'Workstations'}</span>
         </div>`
      : `${buildSlotBlocksHtml(lab, slots)}
         <div class="lab-split-foot">
           <span>${isId() ? 'Klik blok hijau untuk langsung mengisi form reservasi pada jam tersebut.' : 'Click any green slot to pre-fill the reservation form for that time window.'}</span>
           <span class="mono">${state.calendarMode === 'weekly' ? (isId() ? 'Tampilan Mingguan' : 'Weekly View') : `${formatDisplayDate(state.selectedDate)} · 07:00 – 21:00 WIB`}</span>
         </div>`;

    const displayStatus = (() => {
      if (lab.status === 'maintenance' || isTodayView) return liveStatus;
      if (state.selectedDate < wib.isoDate) {
        return { cls: 'is-maintenance', label: isId() ? 'Tanggal Berlalu' : 'Past Date' };
      }
      if (getDayIndex(state.selectedDate) === 0) {
        return { cls: 'is-maintenance', label: isId() ? 'Tutup (Minggu)' : 'Closed (Sunday)' };
      }
      if (labOpenSlots > 0) {
        return {
          cls: 'is-now-open',
          label: isId() ? `${labOpenSlots}/${slots.length} slot tersedia` : `${labOpenSlots}/${slots.length} slots open`
        };
      }
      return { cls: 'is-now-busy', label: isId() ? 'Jadwal Penuh' : 'Fully Booked' };
    })();

    container.innerHTML = `<div class="lab-split-workspace">
      <aside class="lab-split-aside">
        <div class="lab-photo-wrap">
          <img src="${escapeHtml(assetUrl(lab.photo || 'assets/labs/j21.webp'))}" alt="${escapeHtml(labDisplayName(lab))}" class="lab-photo-img" loading="lazy">
          <span class="lab-photo-caption">${escapeHtml(lab.lantai || 'Gedung J · Lt. 2')} &middot; ${lab.kapasitas} PC</span>
        </div>
        <div class="lab-aside-head">
          <div>
            <span class="lab-code">${escapeHtml(lab.kode)}</span>
            <h2 class="lab-aside-title">${escapeHtml(labDisplayName(lab))}</h2>
          </div>
          <span class="lab-status-pill ${displayStatus.cls}">
            <span class="live-dot" aria-hidden="true"></span>
            <span>${escapeHtml(displayStatus.label)}</span>
          </span>
        </div>
        <div class="lab-aside-chips">${quickChips}</div>
        <button type="button" class="btn btn-primary btn-sm" style="width:100%;" data-request-room="${lab.id}" ${lab.status === 'maintenance' ? 'disabled' : ''}>
          ${isId() ? 'Ajukan Pemakaian Ruang →' : 'Request This Room →'}
        </button>
      </aside>

      <div class="lab-split-main">
        <div class="lab-split-head">
          <div class="room-subtabs" role="tablist" aria-label="Room panel view">
            <button type="button" class="room-subtab-btn ${subTab === 'schedule' ? 'is-active' : ''}" role="tab" aria-selected="${subTab === 'schedule' ? 'true' : 'false'}" data-room-subtab="schedule">
              <span>${isId() ? 'Jadwal Slot' : 'Schedule'}</span>
              ${lab.status === 'aktif' ? `<span class="room-subtab-pill">${labOpenSlots}/${slots.length}</span>` : ''}
            </button>
            <button type="button" class="room-subtab-btn ${subTab === 'specs' ? 'is-active' : ''}" role="tab" aria-selected="${subTab === 'specs' ? 'true' : 'false'}" data-room-subtab="specs">
              <span>${isId() ? 'Spesifikasi PC & Software' : 'Hardware & Software Specs'}</span>
            </button>
          </div>
          <span class="mono" style="font-size:0.74rem;color:var(--ink-muted);">${escapeHtml(lab.kode)} &middot; ${formatDisplayDate(state.selectedDate)}</span>
        </div>
        <div class="lab-split-body">${rightPanelBody}</div>
      </div>
    </div>`;

    if (animate) animateCardsWithMotion('#lab-monitoring-list .lab-split-workspace');
  }

  function renderReservationFormContext() {
    populateSelects();
    const labEl = document.getElementById('res-lab');
    const dateEl = document.getElementById('res-tanggal');
    const startEl = document.getElementById('res-mulai');
    const endEl = document.getElementById('res-selesai');
    const pesertaEl = document.getElementById('res-peserta');

    const wibToday = getWibNow().isoDate;
    dateEl.min = wibToday;
    if (!dateEl.value || dateEl.value < wibToday) {
      dateEl.value = state.selectedDate >= wibToday && getDayIndex(state.selectedDate) !== 0 ? state.selectedDate : wibToday;
    }
    if (!startEl.value) startEl.value = '17:00';
    if (!endEl.value) endEl.value = '19:00';

    const lab = state.labs.find((l) => l.id === Number(labEl.value));
    document.getElementById('res-capacity-hint').textContent = lab
      ? (isId() ? `Kapasitas maksimal ${lab.kode}: ${lab.kapasitas} PC.` : `Maximum capacity of ${lab.kode}: ${lab.kapasitas} PCs.`)
      : '';
    const specCard = document.getElementById('res-lab-spec-card');
    if (specCard) {
      if (lab) {
        const specs = lab.spesifikasi
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
          .map((s) => `<span class="lab-spec-tag">${escapeHtml(s)}</span>`)
          .join('');
        const stPill = lab.status === 'aktif'
          ? `<span class="status-badge status-approved">${isId() ? 'Siap Pakai' : 'Ready'}</span>`
          : `<span class="status-badge status-rejected">Maintenance</span>`;
        specCard.innerHTML = `
          <div class="res-lab-spec-head">
            <span>${isId() ? `Spesifikasi Hardware & Software ${escapeHtml(lab.kode)}` : `${escapeHtml(lab.kode)} PC & Software Specs`}</span>
            ${stPill}
          </div>
          <div class="lab-spec-tags">${specs}</div>`;
        specCard.hidden = false;
      } else {
        specCard.hidden = true;
      }
    }

    const check = checkReservationConflict({
      labId: labEl.value,
      tanggal: dateEl.value,
      jamMulai: startEl.value,
      jamSelesai: endEl.value,
      peserta: pesertaEl.value
    });

    const box = document.getElementById('conflict-check-box');
    box.className = `alert-box ${check.ok ? 'alert-ok' : 'alert-error'}`;
    const heading = check.ok
      ? (isId() ? 'Jadwal Tersedia' : 'Schedule Available')
      : (isId() ? 'Jadwal Tidak Dapat Diajukan' : 'Schedule Unavailable');
    box.innerHTML = `<strong>${heading}</strong><span>${escapeHtml(check.reason)}</span>`;

    const dow = getDayIndex(dateEl.value);
    const rutins = state.jadwalRutin.filter((j) => j.lab_id === Number(labEl.value) && j.hari === dow);
    const resList = state.reservasis.filter(
      (r) =>
        r.lab_id === Number(labEl.value) &&
        r.tanggal === dateEl.value &&
        (r.status === 'approved' || r.status === 'pending')
    );

    const aside = document.getElementById('aside-schedule-list');
    document.getElementById('aside-schedule-desc').textContent = `${lab ? lab.kode : ''} ${isId() ? 'pada' : 'on'} ${formatDisplayDate(dateEl.value)}`;

    const items = [
      ...rutins.map((j) => ({
        time: `${j.jam_mulai} - ${j.jam_selesai}`,
        label: `${isId() ? 'Praktikum' : 'Practicum'}: ${j.mata_kuliah} (${j.kelas})`,
        cls: 'status-rejected'
      })),
      ...resList.map((r) => ({
        time: `${r.jam_mulai} - ${r.jam_selesai}`,
        label: `${r.status === 'approved' ? (isId() ? 'Disetujui' : 'Approved') : 'Pending'}: ${r.pemohon_nama}`,
        cls: r.status === 'approved' ? 'status-approved' : 'status-pending'
      }))
    ].sort((a, b) => a.time.localeCompare(b.time));

    if (items.length === 0) {
      aside.innerHTML = `<div class="alert-box alert-ok" style="margin:0;">${isId() ? 'Belum ada jadwal praktikum ataupun reservasi pada tanggal ini.' : 'No routine practicums or bookings scheduled on this date.'}</div>`;
    } else {
      aside.innerHTML = items
        .map(
          (item) => `<div class="agenda-item">
            <div>
              <div class="mono" style="font-weight:700;">${escapeHtml(item.time)}</div>
              <div style="font-size:0.8125rem;color:var(--ink-muted);">${escapeHtml(item.label)}</div>
            </div>
            <span class="status-badge ${item.cls}">${item.cls === 'status-rejected' ? (isId() ? 'Praktikum' : 'Practicum') : item.cls === 'status-approved' ? (isId() ? 'Terisi' : 'Booked') : 'Pending'}</span>
          </div>`
        )
        .join('');
    }
  }

  function statusBadgeHtml(status) {
    const map = isId()
      ? {
          pending: ['status-pending', 'Menunggu Verifikasi'],
          approved: ['status-approved', 'Disetujui'],
          rejected: ['status-rejected', 'Ditolak'],
          cancelled: ['status-cancelled', 'Dibatalkan']
        }
      : {
          pending: ['status-pending', 'Pending Verification'],
          approved: ['status-approved', 'Approved'],
          rejected: ['status-rejected', 'Rejected'],
          cancelled: ['status-cancelled', 'Cancelled']
        };
    const [cls, label] = map[status] || ['status-pending', status];
    const iconSvg =
      status === 'approved'
        ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="8.5 12.5 11 15 16 9.5"/></svg>'
        : status === 'pending'
        ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 7 12 12 15.5 14"/></svg>'
        : '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
    return `<span class="status-badge ${cls}">${iconSvg}<span>${label}</span></span>`;
  }

  function renderMineTable() {
    const user = currentUser();
    if (!user) return;
    document.querySelectorAll('[data-mine-filter]').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.mineFilter === state.mineFilter);
    });

    const mine = state.reservasis.filter((r) => r.pemohon_nim === user.nim);
    const filtered = mine.filter((r) => {
      if (state.mineFilter === 'all') return true;
      if (state.mineFilter === 'rejected') return r.status === 'rejected' || r.status === 'cancelled';
      return r.status === state.mineFilter;
    });

    const wrap = document.getElementById('mine-table-wrap');
    const empty = document.getElementById('mine-empty');
    const tbody = document.getElementById('mine-tbody');

    if (filtered.length === 0) {
      wrap.hidden = true;
      empty.hidden = false;
      return;
    }

    wrap.hidden = false;
    empty.hidden = true;

    tbody.innerHTML = filtered
      .map((r) => {
        const lab = state.labs.find((l) => l.id === r.lab_id);
        const labLabel = lab ? `${lab.kode} (${labDisplayName(lab)})` : `Lab #${r.lab_id}`;
        const note = r.catatan_laboran ? `<div class="field-hint" style="margin-top:4px;">${isId() ? 'Catatan' : 'Note'}: ${escapeHtml(r.catatan_laboran)}</div>` : '';
        const actions = [];
        if (r.status === 'approved') {
          actions.push(`<button type="button" class="btn btn-primary btn-sm" data-view-permit="${r.id}">${isId() ? 'Lihat E-Tiket / PDF' : 'View E-Ticket / PDF'}</button>`);
        }
        if (r.status === 'pending') {
          actions.push(`<button type="button" class="btn btn-secondary btn-sm" data-edit-res="${r.id}">${isId() ? 'Ubah' : 'Edit'}</button>`);
          actions.push(`<button type="button" class="btn btn-danger btn-sm" data-cancel-res="${r.id}">${isId() ? 'Batalkan' : 'Cancel'}</button>`);
        }
        if (r.status === 'rejected' || r.status === 'cancelled') {
          actions.push(`<button type="button" class="btn btn-secondary btn-sm" data-delete-res="${r.id}">${isId() ? 'Hapus Riwayat' : 'Remove'}</button>`);
        }

        return `<tr>
          <td class="mono" data-label="${escapeHtml(tr('col_code'))}">${escapeHtml(r.kode_tiket)}</td>
          <td data-label="${escapeHtml(tr('col_lab_date'))}"><strong>${escapeHtml(labLabel)}</strong><div class="field-hint">${escapeHtml(formatDisplayDate(r.tanggal))}</div></td>
          <td class="mono" data-label="${escapeHtml(tr('col_time'))}">${escapeHtml(r.jam_mulai)} - ${escapeHtml(r.jam_selesai)}</td>
          <td data-label="${escapeHtml(tr('col_purpose'))}">${escapeHtml(r.keperluan)}<div class="field-hint">${r.peserta} ${isId() ? 'mahasiswa' : 'students'}</div></td>
          <td data-label="${escapeHtml(tr('col_status'))}">${statusBadgeHtml(r.status)}${note}</td>
          <td data-label="${escapeHtml(tr('col_action'))}"><div class="action-group">${actions.join('')}</div></td>
        </tr>`;
      })
      .join('');
  }

  function renderLaboranPanels() {
    updateHeaderAndCounts();
    if (currentRole() !== 'laboran') return;

    const pendingTotal = state.reservasis.filter((r) => r.status === 'pending').length;
    const approvedTotal = state.reservasis.filter((r) => r.status === 'approved').length;
    const activeLabs = state.labs.filter((l) => l.status === 'aktif').length;
    const maintLabs = state.labs.length - activeLabs;

    document.getElementById('lstat-pending').textContent = String(pendingTotal);
    document.getElementById('lstat-approved').textContent = String(approvedTotal);
    document.getElementById('lstat-labs-aktif').textContent = `${activeLabs} / ${state.labs.length}`;
    document.getElementById('lstat-labs-maint').textContent = isId() ? `${maintLabs} dalam maintenance` : `${maintLabs} maintenance`;
    document.getElementById('lstat-jadwal-count').textContent = String(state.jadwalRutin.length);

    document.querySelectorAll('[data-ltab]').forEach((b) => {
      const active = b.dataset.ltab === state.activeLaboranTab;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    document.querySelectorAll('.laboran-subpanel').forEach((p) => {
      p.classList.toggle('is-active', p.id === `lpanel-${state.activeLaboranTab}`);
    });

    document.querySelectorAll('[data-verif-filter]').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.verifFilter === (state.verifFilter || 'all'));
    });
    const verifSearchInput = document.getElementById('admin-verif-search');
    const verifClearBtn = document.getElementById('btn-clear-verif-search');
    if (verifSearchInput) verifSearchInput.value = state.verifSearch || '';
    if (verifClearBtn) verifClearBtn.hidden = !(state.verifSearch || '').trim();

    const vQuery = (state.verifSearch || '').trim().toLowerCase();
    const vStatusFilter = state.verifFilter || 'all';
    const vLabFilter = state.verifLabFilter || 'all';
    const verifLabEl = document.getElementById('admin-verif-lab-filter');
    if (verifLabEl) verifLabEl.value = vLabFilter;
    const sortedRes = [...state.reservasis]
      .filter((r) => {
        if (vLabFilter !== 'all' && String(r.lab_id) !== vLabFilter) return false;
        if (vStatusFilter === 'rejected') {
          if (r.status !== 'rejected' && r.status !== 'cancelled') return false;
        } else if (vStatusFilter !== 'all' && r.status !== vStatusFilter) {
          return false;
        }
        if (!vQuery) return true;
        const lab = state.labs.find((l) => l.id === r.lab_id);
        const hay = `${r.pemohon_nama} ${r.pemohon_nim} ${r.kode_tiket} ${r.keperluan} ${lab ? `${lab.kode} ${labDisplayName(lab)}` : ''}`.toLowerCase();
        return hay.includes(vQuery);
      })
      .sort((a, b) => {
        const order = { pending: 0, approved: 1, rejected: 2, cancelled: 3 };
        return (order[a.status] ?? 9) - (order[b.status] ?? 9);
      });

    const vWrap = document.getElementById('verifikasi-table-wrap');
    const vEmpty = document.getElementById('verifikasi-empty');
    if (sortedRes.length === 0) {
      vWrap.hidden = true;
      vEmpty.hidden = false;
    } else {
      vWrap.hidden = false;
      vEmpty.hidden = true;
      document.getElementById('verifikasi-tbody').innerHTML = sortedRes
        .map((r) => {
          const lab = state.labs.find((l) => l.id === r.lab_id);
          const btns =
            r.status === 'pending'
              ? `<button type="button" class="btn btn-success btn-sm" data-verify-res="${r.id}" data-vaction="approved">${isId() ? 'Setujui' : 'Approve'}</button>
                 <button type="button" class="btn btn-danger btn-sm" data-verify-res="${r.id}" data-vaction="rejected">${isId() ? 'Tolak' : 'Reject'}</button>`
              : r.status === 'approved'
              ? `<button type="button" class="btn btn-secondary btn-sm" data-view-permit="${r.id}">${isId() ? 'Lihat Surat' : 'View Permit'}</button>
                 <button type="button" class="btn btn-danger btn-sm" data-verify-res="${r.id}" data-vaction="rejected">${isId() ? 'Batalkan' : 'Revoke'}</button>`
              : `<span class="field-hint">${isId() ? 'Selesai' : 'Closed'}</span>`;

          return `<tr>
            <td data-label="${escapeHtml(tr('col_applicant'))}"><strong>${escapeHtml(r.pemohon_nama)}</strong><div class="mono field-hint">${escapeHtml(r.pemohon_nim)} · ${escapeHtml(r.kode_tiket)}</div></td>
            <td data-label="${escapeHtml(tr('col_lab_time'))}"><strong>${escapeHtml(lab ? lab.kode : '-')}</strong><div class="field-hint">${escapeHtml(formatDisplayDate(r.tanggal))}</div><div class="mono field-hint">${escapeHtml(r.jam_mulai)} - ${escapeHtml(r.jam_selesai)}</div></td>
            <td data-label="${escapeHtml(tr('col_purpose_members'))}">${escapeHtml(r.keperluan)}<div class="field-hint">${escapeHtml(r.anggota)}</div></td>
            <td data-label="${escapeHtml(tr('col_status'))}">${statusBadgeHtml(r.status)}</td>
            <td data-label="${escapeHtml(tr('col_tech_action'))}"><div class="action-group">${btns}</div></td>
          </tr>`;
        })
        .join('');
    }

    document.getElementById('crud-labs-tbody').innerHTML = state.labs
      .map(
        (l) => `<tr>
          <td class="mono" data-label="${escapeHtml(tr('col_room_code'))}"><strong>${escapeHtml(l.kode)}</strong></td>
          <td data-label="${escapeHtml(tr('col_room_name'))}">${escapeHtml(labDisplayName(l))}</td>
          <td class="mono" data-label="${escapeHtml(tr('col_capacity'))}">${l.kapasitas} PC</td>
          <td data-label="${escapeHtml(tr('col_specs'))}">${escapeHtml(l.spesifikasi)}</td>
          <td data-label="${escapeHtml(tr('col_status'))}"><span class="lab-status-pill is-${l.status}">${l.status === 'aktif' ? (isId() ? 'Aktif' : 'Active') : 'Maintenance'}</span></td>
          <td data-label="${escapeHtml(tr('col_action'))}"><div class="action-group">
            <button type="button" class="btn btn-secondary btn-sm" data-toggle-lab-status="${l.id}">${l.status === 'aktif' ? 'Set Maintenance' : (isId() ? 'Aktifkan' : 'Activate')}</button>
            <button type="button" class="btn btn-secondary btn-sm" data-edit-lab="${l.id}">Edit</button>
            <button type="button" class="btn btn-danger btn-sm" data-delete-lab="${l.id}">${isId() ? 'Hapus' : 'Delete'}</button>
          </div></td>
        </tr>`
      )
      .join('');

    const jadwalSearchInput = document.getElementById('admin-jadwal-search');
    const jadwalClearBtn = document.getElementById('btn-clear-jadwal-search');
    const jadwalDayEl = document.getElementById('admin-jadwal-day-filter');
    if (jadwalSearchInput) jadwalSearchInput.value = state.jadwalSearch || '';
    if (jadwalClearBtn) jadwalClearBtn.hidden = !(state.jadwalSearch || '').trim();
    if (jadwalDayEl) jadwalDayEl.value = state.jadwalDayFilter || 'all';

    const langKey = isId() ? 'id' : 'en';
    const jQuery = (state.jadwalSearch || '').trim().toLowerCase();
    const jLabFilter = state.jadwalLabFilter || 'all';
    const jDayFilter = state.jadwalDayFilter || 'all';
    const filteredJadwal = [...state.jadwalRutin]
      .filter((j) => {
        if (jLabFilter !== 'all' && String(j.lab_id) !== jLabFilter) return false;
        if (jDayFilter !== 'all' && String(j.hari) !== jDayFilter) return false;
        if (!jQuery) return true;
        const lab = state.labs.find((l) => l.id === j.lab_id);
        const hay = `${j.mata_kuliah} ${j.kelas} ${j.pengampu} ${DAY_NAMES_BY_LANG[langKey][j.hari]} ${lab ? `${lab.kode} ${labDisplayName(lab)}` : ''}`.toLowerCase();
        return hay.includes(jQuery);
      })
      .sort((a, b) => a.hari - b.hari || a.jam_mulai.localeCompare(b.jam_mulai));

    const jWrap = document.getElementById('jadwal-table-wrap');
    const jEmpty = document.getElementById('jadwal-empty');
    if (filteredJadwal.length === 0) {
      jWrap.hidden = true;
      jEmpty.hidden = false;
    } else {
      jWrap.hidden = false;
      jEmpty.hidden = true;
      document.getElementById('crud-jadwal-tbody').innerHTML = filteredJadwal
        .map((j) => {
          const lab = state.labs.find((l) => l.id === j.lab_id);
          return `<tr>
            <td class="mono" data-label="${escapeHtml(tr('col_lab'))}"><strong>${escapeHtml(lab ? lab.kode : '-')}</strong></td>
            <td data-label="${escapeHtml(tr('col_day_time'))}"><strong>${DAY_NAMES_BY_LANG[langKey][j.hari]}</strong><div class="mono field-hint">${escapeHtml(j.jam_mulai)} - ${escapeHtml(j.jam_selesai)}</div></td>
            <td data-label="${escapeHtml(tr('col_course_class'))}"><strong>${escapeHtml(j.mata_kuliah)}</strong><div class="field-hint">${escapeHtml(j.kelas)}</div></td>
            <td data-label="${escapeHtml(tr('col_instructor'))}">${escapeHtml(j.pengampu)}</td>
            <td data-label="${escapeHtml(tr('col_action'))}"><div class="action-group">
              <button type="button" class="btn btn-secondary btn-sm" data-edit-jadwal="${j.id}">Edit</button>
              <button type="button" class="btn btn-danger btn-sm" data-delete-jadwal="${j.id}">${isId() ? 'Hapus' : 'Delete'}</button>
            </div></td>
          </tr>`;
        })
        .join('');
    }

    const rekapPeriod = state.rekapPeriod || 'all';
    const rekapPeriodEl = document.getElementById('rekap-period-filter');
    if (rekapPeriodEl) rekapPeriodEl.value = rekapPeriod;
    const wibToday = getWibNow().isoDate;
    const periodMatch = (tanggal) => {
      if (rekapPeriod === 'week') {
        const minDate = addDays(wibToday, -3);
        const maxDate = addDays(wibToday, 4);
        return tanggal >= minDate && tanggal <= maxDate;
      }
      if (rekapPeriod === 'month') {
        return tanggal.slice(0, 7) === wibToday.slice(0, 7);
      }
      return true;
    };

    document.getElementById('rekap-tbody').innerHTML = state.labs
      .map((l) => {
        const rCount = state.jadwalRutin.filter((j) => j.lab_id === l.id).length;
        const app = state.reservasis.filter((r) => r.lab_id === l.id && r.status === 'approved' && periodMatch(r.tanggal)).length;
        const pen = state.reservasis.filter((r) => r.lab_id === l.id && r.status === 'pending' && periodMatch(r.tanggal)).length;
        const rej = state.reservasis.filter((r) => r.lab_id === l.id && (r.status === 'rejected' || r.status === 'cancelled') && periodMatch(r.tanggal)).length;
        return `<tr>
          <td class="mono" data-label="${escapeHtml(tr('col_room_code'))}"><strong>${escapeHtml(l.kode)}</strong></td>
          <td data-label="${escapeHtml(tr('col_room_name'))}">${escapeHtml(labDisplayName(l))}</td>
          <td class="mono" data-label="${escapeHtml(tr('col_prac_week'))}">${rCount} ${isId() ? 'sesi' : 'sessions'}</td>
          <td class="mono" data-label="${escapeHtml(tr('col_approved'))}">${app}</td>
          <td class="mono" data-label="${escapeHtml(tr('col_pending'))}">${pen}</td>
          <td data-label="${escapeHtml(tr('col_rejected'))}">${rej}</td>
        </tr>`;
      })
      .join('');

    const uSearchEl = document.getElementById('admin-user-search');
    const uClearEl = document.getElementById('btn-clear-user-search');
    if (uSearchEl && uSearchEl.value !== state.userSearch) uSearchEl.value = state.userSearch;
    if (uClearEl) uClearEl.hidden = !(state.userSearch || '').trim();
    const uq = (state.userSearch || '').trim().toLowerCase();
    const filteredUsers = state.users.filter((u) => {
      if (!uq) return true;
      return `${u.name} ${u.nim} ${u.email} ${u.role}`.toLowerCase().includes(uq);
    });
    const uWrap = document.getElementById('users-table-wrap');
    const uEmpty = document.getElementById('users-empty');
    const uTbody = document.getElementById('crud-users-tbody');
    if (uWrap && uEmpty && uTbody) {
      if (filteredUsers.length === 0) {
        uWrap.hidden = true;
        uEmpty.hidden = false;
      } else {
        uWrap.hidden = false;
        uEmpty.hidden = true;
        const meId = currentUser()?.id;
        uTbody.innerHTML = filteredUsers
          .map((u) => {
            const isSelf = u.id === meId;
            const roleBadge = u.role === 'laboran'
              ? `<span class="status-badge status-approved">${isId() ? 'Admin / Laboran' : 'Admin / Staff'}</span>`
              : `<span class="status-badge status-pending">${isId() ? 'Mahasiswa' : 'Student'}</span>`;
            const resCount = state.reservasis.filter((r) => r.pemohon_nim === u.nim).length;
            const toggleRoleLabel = u.role === 'laboran'
              ? (isId() ? 'Jadikan Mahasiswa' : 'Set Student')
              : (isId() ? 'Jadikan Admin' : 'Set Admin');
            return `<tr>
              <td data-label="${escapeHtml(tr('col_user_name'))}"><strong>${escapeHtml(u.name)}</strong>${isSelf ? ` <span class="field-hint">(${isId() ? 'Anda' : 'You'})</span>` : ''}</td>
              <td class="mono" data-label="${escapeHtml(tr('col_nim'))}">${escapeHtml(u.nim)}</td>
              <td class="mono" data-label="${escapeHtml(tr('col_ums_email'))}">${escapeHtml(u.email)}</td>
              <td data-label="${escapeHtml(tr('col_role'))}">${roleBadge}</td>
              <td class="mono" data-label="${escapeHtml(tr('col_bookings'))}">${resCount}</td>
              <td data-label="${escapeHtml(tr('col_action'))}"><div class="action-group">
                <button type="button" class="btn btn-secondary btn-sm" data-edit-user="${u.id}">Edit</button>
                ${isSelf ? '' : `<button type="button" class="btn btn-secondary btn-sm" data-toggle-user-role="${u.id}">${toggleRoleLabel}</button>
                <button type="button" class="btn btn-danger btn-sm" data-delete-user="${u.id}">${isId() ? 'Hapus' : 'Delete'}</button>`}
              </div></td>
            </tr>`;
          })
          .join('');
      }
    }
  }

  function renderSmartFinder() {
    const grid = document.getElementById('finder-results-grid');
    const emptyEl = document.getElementById('finder-empty');
    const dateInp = document.getElementById('finder-date');
    const durInp = document.getElementById('finder-duration');
    const pcInp = document.getElementById('finder-min-pc');
    const kwInp = document.getElementById('finder-keyword');
    if (!grid || !emptyEl) return;

    if (dateInp && !dateInp.value) dateInp.value = state.selectedDate || getWibNow().isoDate;
    const targetDate = dateInp?.value || state.selectedDate || getWibNow().isoDate;
    const dur = Math.max(1, Math.min(3, Number(durInp?.value || 2)));
    const minPc = Math.max(1, Number(pcInp?.value || 1));
    const kw = (kwInp?.value || '').trim().toLowerCase();

    const cards = [];
    if (getDayIndex(targetDate) !== 0) {
      state.labs.forEach((lab) => {
        if (lab.status === 'maintenance') return;
        if (lab.kapasitas < minPc) return;
        const hay = `${lab.kode} ${labDisplayName(lab)} ${lab.spesifikasi}`.toLowerCase();
        if (kw && !hay.includes(kw)) return;

        const slots = computeDaySlots(lab, targetDate);
        const blocks = [];
        for (let i = 0; i <= slots.length - dur; i += 1) {
          const slice = slots.slice(i, i + dur);
          if (slice.every((s) => s.kind === 'open')) {
            blocks.push({ start: slice[0].start, end: slice[slice.length - 1].end });
          }
        }
        if (blocks.length > 0) cards.push({ lab, blocks });
      });
    }

    if (cards.length === 0) {
      grid.hidden = true;
      grid.innerHTML = '';
      emptyEl.hidden = false;
      return;
    }

    grid.hidden = false;
    emptyEl.hidden = true;
    grid.innerHTML = cards
      .map(({ lab, blocks }) => `
        <article class="finder-lab-card">
          <div class="finder-lab-head">
            <div>
              <span class="lab-code">${escapeHtml(lab.kode)}</span>
              <h3 style="margin:6px 0 2px;font-size:1rem;">${escapeHtml(labDisplayName(lab))}</h3>
              <span class="field-hint">${lab.kapasitas} PC &middot; ${escapeHtml(lab.spesifikasi)}</span>
            </div>
            <span class="status-badge status-approved">${blocks.length} ${isId() ? 'opsi' : 'blocks'}</span>
          </div>
          <div class="finder-slot-pills">
            ${blocks
              .map(
                (b) => `<button type="button" class="finder-slot-btn" data-finder-book="${lab.id}" data-finder-date="${escapeHtml(targetDate)}" data-finder-start="${b.start}" data-finder-end="${b.end}">
                  <span>${b.start} - ${b.end}</span>
                  <span>&rarr;</span>
                </button>`
              )
              .join('')}
          </div>
        </article>
      `)
      .join('');
  }

  function renderStudentLabsDirectory() {
    const grid = document.getElementById('student-labs-grid');
    const filterSel = document.getElementById('student-prac-lab-filter');
    const tbody = document.getElementById('student-prac-tbody');
    if (grid) {
      grid.innerHTML = state.labs
        .map((lab) => {
          const liveStatus = getLiveLabStatus(lab);
          const openCount = lab.status === 'maintenance'
            ? 0
            : computeDaySlots(lab, getWibNow().isoDate).filter((s) => s.kind === 'open').length;
          const sd = lab.specsDetail || {};
          const detailSpecLine = sd.cpu
            ? `${sd.cpu} &middot; ${sd.ram} &middot; ${sd.gpu} &middot; ${sd.os}`
            : lab.spesifikasi;
          return `<article class="student-lab-card">
            ${lab.photo ? `<img src="${escapeHtml(assetUrl(lab.photo))}" alt="${escapeHtml(labDisplayName(lab))}" class="student-lab-photo" loading="lazy">` : ''}
            <div class="student-lab-head">
              <div>
                <span class="lab-code">${escapeHtml(lab.kode)}</span>
                <h3 style="margin:6px 0 2px;font-size:1.05rem;">${escapeHtml(labDisplayName(lab))}</h3>
                <span class="field-hint">${lab.kapasitas} PC &middot; ${openCount}/7 ${isId() ? 'slot kosong hari ini' : 'open slots today'}</span>
              </div>
              <span class="lab-status-pill ${liveStatus.cls}">
                <span class="live-dot" aria-hidden="true"></span>
                <span>${escapeHtml(liveStatus.label)}</span>
              </span>
            </div>
            <div class="student-lab-specs">${escapeHtml(detailSpecLine)}</div>
            <div style="display:flex;justify-content:flex-end;">
              <button type="button" class="btn btn-primary btn-sm" data-dir-book="${lab.id}" ${lab.status === 'maintenance' ? 'disabled' : ''}>
                ${isId() ? 'Booking Ruangan Ini' : 'Book This Lab'}
              </button>
            </div>
          </article>`;
        })
        .join('');
    }
    if (filterSel && tbody) {
      const prevVal = filterSel.value || 'all';
      filterSel.innerHTML = `<option value="all">${escapeHtml(tr('opt_all_labs'))}</option>` +
        state.labs.map((l) => `<option value="${l.id}">${escapeHtml(l.kode)} - ${escapeHtml(labDisplayName(l))}</option>`).join('');
      if (Array.from(filterSel.options).some((o) => o.value === prevVal)) filterSel.value = prevVal;

      const selLabId = filterSel.value;
      const rows = state.jadwalRutin
        .filter((j) => selLabId === 'all' || String(j.lab_id) === String(selLabId))
        .slice()
        .sort((a, b) => a.hari - b.hari || a.jam_mulai.localeCompare(b.jam_mulai));

      tbody.innerHTML = rows
        .map((j) => {
          const lab = state.labs.find((l) => l.id === j.lab_id);
          return `<tr>
            <td data-label="${escapeHtml(tr('col_day'))}">${escapeHtml(dayName(j.hari))}</td>
            <td class="mono" data-label="${escapeHtml(tr('col_time'))}">${j.jam_mulai} - ${j.jam_selesai}</td>
            <td data-label="${escapeHtml(tr('col_lab'))}"><span class="lab-code">${escapeHtml(lab ? lab.kode : '-')}</span></td>
            <td data-label="${escapeHtml(tr('col_course'))}"><strong>${escapeHtml(j.mata_kuliah)}</strong> (${escapeHtml(j.kelas)})</td>
            <td data-label="${escapeHtml(tr('col_instructor'))}">${escapeHtml(j.pengampu || j.dosen_pengampu || '-')}</td>
          </tr>`;
        })
        .join('');
    }
  }

  function renderTicketWallet() {
    const grid = document.getElementById('tickets-wallet-grid');
    const emptyEl = document.getElementById('tickets-empty');
    if (!grid || !emptyEl) return;
    const u = currentUser();
    const approved = u
      ? state.reservasis
          .filter((r) => r.pemohon_nim === u.nim && r.status === 'approved')
          .sort((a, b) => a.tanggal.localeCompare(b.tanggal) || a.jam_mulai.localeCompare(b.jam_mulai))
      : [];

    if (approved.length === 0) {
      grid.hidden = true;
      grid.innerHTML = '';
      emptyEl.hidden = false;
      return;
    }

    grid.hidden = false;
    emptyEl.hidden = true;
    grid.innerHTML = approved
      .map((r) => {
        const lab = state.labs.find((l) => l.id === r.lab_id);
        const qrPayload = `LABSPACE TI UMS | ${r.kode_tiket} | ${lab ? lab.kode : 'LAB'} | ${r.tanggal} ${r.jam_mulai}-${r.jam_selesai} | ${r.pemohon_nim}`;
        return `<article class="ticket-wallet-card">
          <div class="ticket-wallet-head">
            <div>
              <span class="mono" style="font-weight:700;font-size:0.85rem;">${escapeHtml(r.kode_tiket)}</span>
              <h3 style="margin:4px 0 0;font-size:1rem;">${escapeHtml(lab ? `${lab.kode} - ${labDisplayName(lab)}` : 'Lab')}</h3>
            </div>
            <span class="status-badge status-approved">${isId() ? 'Siap Scan' : 'Ready to Scan'}</span>
          </div>
          <div class="ticket-wallet-body">
            <div class="ticket-wallet-qr">${generateQrSvg(qrPayload)}</div>
            <div class="ticket-wallet-info">
              <strong>${escapeHtml(r.keperluan)}</strong>
              <span class="mono">${escapeHtml(formatDisplayDate(r.tanggal))} &middot; ${r.jam_mulai} - ${r.jam_selesai} WIB</span>
              <span class="field-hint">${isId() ? 'Peserta' : 'Participants'}: ${r.peserta ?? r.jumlah_peserta ?? 1} &middot; ${escapeHtml(r.pemohon_nama)}</span>
            </div>
          </div>
          <div class="ticket-wallet-foot">
            <span class="field-hint">${isId() ? 'Tunjukkan QR + KTM di Lt. 2 Gedung J' : 'Show QR + KTM at Floor 2 Building J'}</span>
            <button type="button" class="btn btn-primary btn-sm" data-view-ticket="${r.id}">${isId() ? 'Lihat / Cetak PDF' : 'View / Print PDF'}</button>
          </div>
        </article>`;
      })
      .join('');
  }

  function generateQrSvg(qrPayload) {
    if (typeof window !== 'undefined' && typeof window.qrcode === 'function') {
      try {
        const qr = window.qrcode(0, 'M');
        qr.addData(String(qrPayload));
        qr.make();
        const count = qr.getModuleCount();
        const margin = 2;
        const total = count + margin * 2;
        let rects = '';
        for (let r = 0; r < count; r += 1) {
          for (let c = 0; c < count; c += 1) {
            if (qr.isDark(r, c)) {
              rects += `<rect x="${c + margin}" y="${r + margin}" width="1" height="1" fill="#141821"/>`;
            }
          }
        }
        return `<svg width="112" height="112" viewBox="0 0 ${total} ${total}" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scannable QR ${escapeHtml(qrPayload)}"><rect width="100%" height="100%" fill="#ffffff"/>${rects}</svg>`;
      } catch {}
    }
    const size = 21;
    let hash = 2166136261;
    for (let i = 0; i < qrPayload.length; i += 1) {
      hash ^= qrPayload.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    let cells = '';
    for (let r = 0; r < size; r += 1) {
      for (let c = 0; c < size; c += 1) {
        const isFinder = (r < 5 && c < 5) || (r < 5 && c >= size - 5) || (r >= size - 5 && c < 5);
        const val = ((hash >>> ((r * size + c) % 24)) ^ (r * 7 + c * 13)) & 1;
        if (isFinder || val === 1) {
          cells += `<rect x="${c * 4}" y="${r * 4}" width="4" height="4" fill="#141821"/>`;
        }
      }
    }
    return `<svg width="104" height="104" viewBox="0 0 ${size * 4} ${size * 4}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Verification code ${escapeHtml(qrPayload)}"><rect width="100%" height="100%" fill="#ffffff"/>${cells}</svg>`;
  }

  function buildAiSupportReply(questionText) {
    const q = String(questionText || '').toLowerCase();
    const wib = getWibNow();
    const today = wib.isoDate;
    const user = currentUser();
    const idStatus = (st) => ({ pending: 'Menunggu Verifikasi', approved: 'Disetujui', rejected: 'Ditolak', cancelled: 'Dibatalkan' }[st] || st);
    const idLabName = (l) => (l && (l.nama_id || l.nama_en)) || 'Lab Komputer';

    const specificLab = state.labs.find((l) => q.includes(l.kode.toLowerCase()) || q.includes(l.kode.toLowerCase().replace(/\./g, '')));
    if (specificLab) {
      if (specificLab.status === 'maintenance') {
        return {
          text: `**${specificLab.kode} (${idLabName(specificLab)})** sedang dalam status **Maintenance** (${specificLab.kapasitas} PC).\n• Spesifikasi: ${specificLab.spesifikasi}`,
          actions: [{ label: 'Cek Lab Lain', nav: 'monitoring' }]
        };
      }
      const openSlots = computeDaySlots(specificLab, today).filter((s) => s.kind === 'open');
      const slotList = openSlots.length > 0 ? openSlots.map((s) => `${s.start}-${s.end}`).join(', ') : 'Penuh hari ini';
      return {
        text: `**${specificLab.kode} (${idLabName(specificLab)})** · Kapasitas ${specificLab.kapasitas} PC\n• Spesifikasi: ${specificLab.spesifikasi}\n• Slot kosong hari ini: ${slotList}`,
        actions: [
          { label: 'Lihat Jadwal', nav: 'monitoring' },
          { label: 'Booking Lab Ini', nav: 'reservasi', labId: specificLab.id }
        ]
      };
    }

    if (q.includes('status') || q.includes('booking saya') || q.includes('reservasi saya') || q.includes('my booking')) {
      if (!user) {
        return {
          text: 'Silakan **Masuk** menggunakan akun mahasiswa terlebih dahulu untuk mengecek status reservasi dan E-Tiket QR Anda.',
          actions: [{ label: 'Masuk Akun', auth: 'login' }]
        };
      }
      const mine = state.reservasis.filter((r) => r.user_id === user.id || r.pemohon_nim === user.nim);
      if (mine.length === 0) {
        return {
          text: `Halo **${user.name}**, Anda belum memiliki pengajuan reservasi lab saat ini.`,
          actions: [{ label: 'Ajukan Reservasi', nav: 'reservasi' }]
        };
      }
      const rows = mine.slice(0, 4).map((r) => {
        const l = state.labs.find((x) => x.id === r.lab_id);
        return `• **${r.kode_tiket}** (${l ? l.kode : 'Lab'}, ${r.tanggal} ${r.jam_mulai}-${r.jam_selesai}) -> **${idStatus(r.status)}**`;
      });
      return {
        text: `Ringkasan reservasi **${user.name}**:\n` + rows.join('\n'),
        actions: [{ label: 'Buka Reservasi Saya', nav: 'riwayat' }]
      };
    }

    if (q.includes('praktikum') || q.includes('jadwal rutin') || q.includes('practicum')) {
      const dayIdx = getDayIndex(today);
      const todayPrak = state.jadwalRutin.filter((j) => Number(j.hari) === dayIdx);
      if (todayPrak.length === 0) {
        return {
          text: `Hari ini (${formatDisplayDate(today)}) tidak ada jadwal praktikum rutin di Gedung J.`,
          actions: [{ label: 'Cek Ketersediaan', nav: 'monitoring' }]
        };
      }
      const list = todayPrak.map((j) => {
        const l = state.labs.find((x) => x.id === j.lab_id);
        return `• **${l ? l.kode : 'Lab'}** (${j.jam_mulai}-${j.jam_selesai}): ${j.mata_kuliah} (${j.kelas})`;
      }).join('\n');
      return {
        text: `Jadwal praktikum hari ini (${formatDisplayDate(today)}):\n` + list,
        actions: [{ label: 'Lihat Papan Jadwal', nav: 'monitoring' }]
      };
    }

    if (q.includes('kosong') || q.includes('free') || q.includes('open') || q.includes('tersedia') || q.includes('available') || q.includes('hari ini') || q.includes('today')) {
      if (getDayIndex(today) === 0) {
        return {
          text: 'Hari ini hari **Minggu**. Layanan Laboratorium TI Gedung J buka **Senin - Sabtu pukul 07:00 - 21:00 WIB**.',
          actions: [{ label: 'Lihat Jadwal Besok', nav: 'monitoring' }]
        };
      }
      const lines = state.labs.map((l) => {
        if (l.status === 'maintenance') return `• **${l.kode}** (${idLabName(l)}): Maintenance`;
        const openSlots = computeDaySlots(l, today).filter((s) => s.kind === 'open');
        const rangeTxt = openSlots.length > 0 ? openSlots.map((s) => s.start).slice(0, 4).join(', ') : 'Penuh';
        return `• **${l.kode}** (${l.kapasitas} PC): **${openSlots.length}/7** slot kosong (${rangeTxt}${openSlots.length > 4 ? '...' : ''})`;
      });
      return {
        text: `Status lab hari ini (**${formatDisplayDate(today)}**, ${wib.hhmm} WIB):\n` + lines.join('\n'),
        actions: [
          { label: 'Lihat Jadwal Lengkap', nav: 'monitoring' },
          { label: 'Ajukan Reservasi', nav: 'reservasi' }
        ]
      };
    }

    if (q.includes('spec') || q.includes('spesifikasi') || q.includes('spek') || q.includes('pc') || q.includes('ram') || q.includes('software')) {
      const specs = state.labs.map((l) => `• **${l.kode}** (${l.kapasitas} PC): ${l.spesifikasi}`).join('\n');
      return {
        text: '**Daftar spesifikasi PC & software Gedung J:**\n' + specs,
        actions: [{ label: 'Ajukan Reservasi', nav: 'reservasi' }]
      };
    }

    if (q.includes('tiket') || q.includes('ticket') || q.includes('kunci') || q.includes('key') || q.includes('pdf') || q.includes('qr')) {
      return {
        text: '**Alur cetak E-Tiket & ambil kunci:**\n1. Pastikan status pengajuan di **Reservasi Saya** sudah **Disetujui**.\n2. Klik **Lihat E-Tiket / PDF** untuk melihat QR scannable & simpan PDF.\n3. Tunjukkan QR E-Tiket + **KTM asli** di Ruang Teknisi Lt. 2 Gedung J.',
        actions: [{ label: 'Buka Reservasi Saya', nav: 'riwayat' }]
      };
    }

    if (q.includes('bentrok') || q.includes('clash') || q.includes('ditolak') || q.includes('reject') || q.includes('cara') || q.includes('book') || q.includes('reservasi')) {
      return {
        text: '**Aturan Anti-Bentrok & Pengajuan Lab:**\n• Tutup hari Minggu & saat status **Maintenance**.\n• Sistem otomatis menolak jika bentrok jadwal praktikum atau booking aktif.\n• Jumlah peserta tidak boleh melebihi kapasitas PC ruangan.\n• Klik slot hijau pada **Ketersediaan Lab** untuk langsung mengisi formulir.',
        actions: [
          { label: 'Cek Slot Kosong', nav: 'monitoring' },
          { label: 'Chat CS Laboran', mode: 'cs' }
        ]
      };
    }

    const activeCount = state.labs.filter((l) => l.status !== 'maintenance').length;
    const openTodayTotal = state.labs.reduce((acc, l) => acc + (l.status === 'maintenance' ? 0 : computeDaySlots(l, today).filter((s) => s.kind === 'open').length), 0);
    return {
      text: `Halo${user ? ` **${user.name}**` : ''}! Saat ini **${activeCount}/${state.labs.length} lab aktif** dengan **${openTodayTotal} slot kosong** hari ini.\n\nCoba ketik kode lab (misal **J.2.1**), tanya **jadwal praktikum**, **status booking saya**, atau pilih topik cepat di atas!`,
      actions: [
        { label: 'Lihat Jadwal Lab', nav: 'monitoring' },
        { label: 'Chat CS Laboran', mode: 'cs' }
      ]
    };
  }

  function formatChatTextHtml(rawText) {
    const esc = escapeHtml(String(rawText || ''));
    return esc.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  }

  function renderSupportCenter(options = {}) {
    const mode = state.supportMode || 'ai';
    const staffMode = currentRole() === 'laboran';
    document.querySelectorAll('[data-support-mode]').forEach((btn) => {
      const active = btn.dataset.supportMode === mode;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    const pAi = document.getElementById('support-panel-ai');
    const pCs = document.getElementById('support-panel-cs');
    if (pAi) pAi.classList.toggle('is-active', mode === 'ai');
    if (pCs) pCs.classList.toggle('is-active', mode === 'cs');

    const wTitle = document.getElementById('support-widget-title');
    const wBadge = document.getElementById('support-widget-badge');
    const wSub = document.getElementById('support-widget-sub');
    const clearBtn = document.getElementById('btn-ai-clear');
    if (wTitle) {
      wTitle.textContent = mode === 'ai' ? 'LabSpace AI' : (isId() ? 'CS Laboran Gedung J' : 'Building J Lab CS');
    }
    if (wBadge) {
      wBadge.textContent = mode === 'ai' ? 'AI' : 'CS';
    }
    if (wSub) {
      wSub.textContent = mode === 'ai'
        ? 'Asisten Cerdas · Gedung J'
        : (isId() ? 'Senin - Sabtu, 07:30 - 17:00 WIB' : 'Mon - Sat, 07:30 - 17:00 WIB');
    }
    if (clearBtn) clearBtn.hidden = mode !== 'ai';

    const csCount = state.csMessages.length;
    const csBadge = document.getElementById('support-cs-count');
    if (csBadge) csBadge.textContent = String(csCount);
    const fabBadge = document.getElementById('support-fab-badge');
    const studentCount = state.csMessages.filter((m) => m.role === 'student').length;
    if (fabBadge) {
      fabBadge.textContent = String(studentCount);
      fabBadge.hidden = !staffMode || studentCount === 0;
    }

    const promptsBox = document.getElementById('ai-quick-prompts');
    if (promptsBox) {
      const prompts = [
        'Lab mana yang kosong hari ini?',
        'Spesifikasi PC setiap lab',
        'Cara cetak E-Tiket & ambil kunci',
        'Cek J.2.1'
      ];
      promptsBox.innerHTML = prompts
        .map((p) => `<button type="button" class="support-prompt-chip" data-ai-prompt="${escapeHtml(p)}">${escapeHtml(p)}</button>`)
        .join('');
    }

    const aiStream = document.getElementById('ai-chat-stream');
    if (aiStream) {
      const welcome = buildAiSupportReply('help');
      const msgs = state.aiMessages.length > 0
        ? state.aiMessages
        : [
            {
              role: 'bot',
              sender: 'LabSpace AI',
              time: getWibNow().hhmm + ' WIB',
              text: welcome.text,
              actions: welcome.actions
            }
          ];
      const renderBubble = (m) => {
        const actionsHtml = Array.isArray(m.actions) && m.actions.length > 0
          ? `<div class="chat-actions-row">${m.actions
              .map((a) => `<button type="button" class="chat-action-btn" ${a.nav ? `data-ai-nav="${escapeHtml(a.nav)}"` : ''} ${a.labId ? `data-ai-lab="${escapeHtml(a.labId)}"` : ''} ${a.mode ? `data-ai-mode="${escapeHtml(a.mode)}"` : ''} ${a.auth ? `data-ai-auth="${escapeHtml(a.auth)}"` : ''}>${escapeHtml(a.label)} &rarr;</button>`)
              .join('')}</div>`
          : '';
        return `<div class="chat-bubble ${m.role === 'user' ? 'is-user' : 'is-bot'}">
          <div class="chat-meta"><span>${escapeHtml(m.sender)}</span><span>${escapeHtml(m.time)}</span></div>
          <div>${formatChatTextHtml(m.text)}</div>
          ${actionsHtml}
        </div>`;
      };
      const typingHtml = options.typing
        ? `<div class="chat-bubble is-bot chat-typing" aria-label="Typing"><span></span><span></span><span></span></div>`
        : '';
      aiStream.innerHTML = msgs.map(renderBubble).join('') + typingHtml;
      aiStream.scrollTop = aiStream.scrollHeight;
    }

    const user = currentUser();
    const csHint = document.getElementById('cs-sender-hint');
    if (csHint) {
      csHint.textContent = user
        ? (staffMode
            ? (isId() ? `Membalas sebagai CS / Admin: ${user.name}` : `Replying as CS / Admin: ${user.name}`)
            : (isId() ? `Mengirim sebagai: ${user.name} (${user.nim})` : `Sending as: ${user.name} (${user.nim})`))
        : (isId() ? 'Mengirim sebagai Pengunjung (disarankan masuk akun mahasiswa)' : 'Sending as Guest (student sign-in recommended)');
    }
    const csBtn = document.getElementById('btn-cs-send');
    if (csBtn) {
      csBtn.textContent = staffMode
        ? (isId() ? 'Kirim Balasan CS' : 'Send Staff Reply')
        : tr('btn_send_cs');
    }

    const csStream = document.getElementById('cs-chat-stream');
    if (csStream) {
      const topicLabels = isId()
        ? { schedule: 'Jadwal & Bentrok', ticket: 'E-Tiket & Kunci', account: 'Akun / NIM', facility: 'PC & Software' }
        : { schedule: 'Schedule & Clash', ticket: 'E-Ticket & Key', account: 'Account / NIM', facility: 'PC & Software' };
      csStream.innerHTML = state.csMessages
        .map(
          (m) => `<div class="chat-bubble ${m.role === 'cs' ? 'is-cs' : 'is-user'}">
            <div class="chat-meta"><span>${escapeHtml(m.sender)} · ${escapeHtml(topicLabels[m.topic] || m.topic)}</span><span>${escapeHtml(m.time)}</span></div>
            <div>${escapeHtml(m.text)}</div>
          </div>`
        )
        .join('');
      csStream.scrollTop = csStream.scrollHeight;
    }
  }

  function openModal(modalId, triggerEl = null) {
    lastFocusedTrigger = triggerEl || document.activeElement;
    const modal = document.getElementById(modalId);
    const body = modal.querySelector('.modal-body');
    if (body) body.scrollTop = 0;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    if (lenisInstance) lenisInstance.stop();
    const focusTarget = modal.querySelector('input:not([type="hidden"]), select, textarea, button');
    if (focusTarget) focusTarget.focus();
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if (lenisInstance && !document.querySelector('.modal-backdrop.is-open') && !document.getElementById('mobile-drawer').classList.contains('is-open')) {
      lenisInstance.start();
    }
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
  }

  let activePermitCode = '';
  let activePermitFileSlug = '';

  function openPermitModal(resId, triggerEl) {
    const r = state.reservasis.find((item) => item.id === Number(resId));
    if (!r) return;
    const lab = state.labs.find((l) => l.id === r.lab_id);
    const applicant = state.users.find((u) => u.nim.toLowerCase() === String(r.pemohon_nim || '').toLowerCase());
    const applicantProdi = (applicant && applicant.prodi) ? applicant.prodi : 'Teknik Informatika';
    const area = document.getElementById('permit-print-area');
    const permitNo = `SI-FKI/${r.kode_tiket.replace('LS-', '')}`;
    const idMode = isId();
    activePermitCode = r.kode_tiket;
    activePermitFileSlug = `LabSpace_Permit_${r.kode_tiket}_${r.pemohon_nim}`;
    const noteText = r.catatan_laboran || (idMode
      ? 'Menunjukkan KTM asli saat pengambilan kunci di Ruang Teknisi Lantai 2.'
      : 'Present your original UMS Student ID card when collecting the room key on Floor 2.');
    const sealSvg = `<div class="permit-seal-badge" aria-hidden="true">
      <span class="permit-seal-kicker">LABSPACE TI</span>
      <svg class="permit-seal-svg" width="52" height="52" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="24" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="2.4 3.6" stroke-linecap="round"/>
        <path d="M18.5 28.8L25.2 35.5L38.2 21.5" stroke="#16a34a" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="permit-seal-foot">${idMode ? 'DISAHKAN' : 'ACCEPTED'}</span>
    </div>`;
    area.innerHTML = `<div class="permit-sheet">
      <div class="permit-ribbon" aria-hidden="true"></div>
      <div class="permit-header">
        <div class="permit-brand">
          <img src="${escapeHtml(assetUrl('assets/logo-ls.png?v=57'))}" alt="" width="44" height="44" class="permit-logo">
          <div>
            <span class="permit-kicker">${idMode ? 'UNIVERSITAS MUHAMMADIYAH SURAKARTA &middot; FAKULTAS KOMUNIKASI &amp; INFORMATIKA' : 'UNIVERSITAS MUHAMMADIYAH SURAKARTA &middot; FACULTY OF COMMUNICATION &amp; INFORMATICS'}</span>
            <h3>${idMode ? 'SURAT IZIN PENGGUNAAN LABORATORIUM KOMPUTER' : 'COMPUTER LABORATORY USAGE PERMIT'}</h3>
            <p>${idMode ? 'Program Studi Teknik Informatika &middot; Gedung J (Ruang J.2.1 &ndash; J.2.4)' : 'Informatics Engineering &middot; Building J (Rooms J.2.1 &ndash; J.2.4)'}</p>
          </div>
        </div>
        <div class="permit-code-box">
          <span class="permit-code-label">${idMode ? 'Kode Tiket Resmi' : 'Official Ticket Code'}</span>
          <strong class="mono permit-code-val">${escapeHtml(r.kode_tiket)}</strong>
          <span class="permit-status-pill">${idMode ? 'DISETUJUI &middot; SIAP AMBIL KUNCI' : 'APPROVED &middot; KEY READY'}</span>
        </div>
      </div>

      <div class="permit-summary-strip">
        <div class="permit-summary-cell">
          <span>${idMode ? 'Ruang Lab' : 'Lab Room'}</span>
          <strong>${escapeHtml(lab ? `${lab.kode} &middot; ${labDisplayName(lab)}` : '-')}</strong>
        </div>
        <div class="permit-summary-cell">
          <span>${idMode ? 'Tanggal Pemakaian' : 'Usage Date'}</span>
          <strong>${escapeHtml(formatLongDate(r.tanggal))}</strong>
        </div>
        <div class="permit-summary-cell">
          <span>${idMode ? 'Slot Waktu' : 'Time Window'}</span>
          <strong class="mono">${escapeHtml(r.jam_mulai)} &ndash; ${escapeHtml(r.jam_selesai)} WIB</strong>
        </div>
        <div class="permit-summary-cell">
          <span>${idMode ? 'Jumlah Peserta' : 'Participants'}</span>
          <strong>${r.peserta} ${idMode ? 'Mahasiswa' : 'Students'}</strong>
        </div>
      </div>

      <div class="permit-grid">
        <dl class="permit-meta">
          <dt>${idMode ? 'No. Dokumen' : 'Document No.'}</dt><dd class="mono">${escapeHtml(permitNo)}</dd>
          <dt>${idMode ? 'Penanggung Jawab' : 'Applicant / PIC'}</dt><dd><strong>${escapeHtml(r.pemohon_nama)}</strong> <span class="mono">(${escapeHtml(r.pemohon_nim)})</span></dd>
          <dt>${idMode ? 'Program Studi' : 'Study Program'}</dt><dd>${escapeHtml(applicantProdi)}</dd>
          <dt>${idMode ? 'Keperluan' : 'Activity / Purpose'}</dt><dd>${escapeHtml(r.keperluan)}</dd>
          <dt>${idMode ? 'Daftar Anggota' : 'Team Members'}</dt><dd>${escapeHtml(r.anggota)}</dd>
          <dt>${idMode ? 'Catatan Laboran' : 'Lab Staff Note'}</dt><dd>${escapeHtml(noteText)}</dd>
        </dl>

        <aside class="permit-qr-card">
          ${generateQrSvg(`LABSPACE TI UMS | ${r.kode_tiket} | ${lab ? lab.kode : 'LAB'} | ${r.tanggal} ${r.jam_mulai}-${r.jam_selesai} | ${r.pemohon_nim}`, 112)}
          <span class="permit-qr-code mono">${escapeHtml(r.kode_tiket)}</span>
          <span class="permit-qr-hint">${idMode ? 'Scan di Meja Teknisi Lt. 2 Gedung J' : 'Scan at Floor 2 Technician Desk'}</span>
          <span class="permit-qr-hash mono">VERIFIED &middot; FKI UMS</span>
        </aside>
      </div>

      <div class="permit-footer">
        <div class="permit-rules">
          <strong>${idMode ? 'Ketentuan Pengambilan Kunci &amp; Pemakaian Ruang' : 'Key Pickup &amp; Laboratory Usage Guidelines'}</strong>
          <ul>
            <li>${idMode ? 'Tunjukkan E-Tiket ini dan titipkan KTM aktif di Ruang Teknisi Lt. 2 Gedung J.' : 'Present this E-Ticket and deposit an active UMS KTM at the Floor 2 Technician Office.'}</li>
            <li>${idMode ? 'Toleransi check-in maksimal 15 menit dari jam mulai; jaga kebersihan dan bebas makanan/minuman.' : 'Check in within 15 minutes of start time; no food or beverages inside laboratory rooms.'}</li>
            <li>${idMode ? 'Pastikan seluruh workstation dimatikan, ruang rapi, dan kunci dikembalikan setelah selesai.' : 'Power down all workstations, leave desks tidy, and return the key right after your session.'}</li>
          </ul>
        </div>
        <div class="permit-sign">
          ${sealSvg}
          <div class="permit-sign-text">
            <span class="permit-sign-label">${idMode ? 'Disahkan secara elektronik oleh' : 'Digitally authorized by'}</span>
            <strong>${idMode ? 'Pengelola Lab TI UMS' : 'Informatics Lab Management'}</strong>
            <span class="permit-sign-label">${idMode ? 'Gedung J Lantai 2 &middot; FKI UMS' : 'Building J Floor 2 &middot; FKI UMS'}</span>
          </div>
        </div>
      </div>

      <div class="permit-doc-foot">
        <span class="mono">LabSpace TI &middot; ${escapeHtml(permitNo)}</span>
        <span>${idMode ? 'Dokumen sah diterbitkan oleh Sistem Manajemen Lab TI FKI UMS' : 'Official electronic pass issued by LabSpace TI FKI UMS'}</span>
      </div>
    </div>`;
    openModal('modal-permit', triggerEl);
  }

  function openConfirm(message, onOk, triggerEl) {
    document.getElementById('modal-confirm-msg').textContent = message;
    confirmCallback = onOk;
    openModal('modal-confirm', triggerEl);
  }

  function openDrawer(triggerEl) {
    lastFocusedTrigger = triggerEl;
    const d = document.getElementById('mobile-drawer');
    d.classList.add('is-open');
    d.setAttribute('aria-hidden', 'false');
    document.getElementById('btn-open-drawer').setAttribute('aria-expanded', 'true');
    if (lenisInstance) lenisInstance.stop();
    document.getElementById('btn-close-drawer').focus();
  }

  function closeDrawer() {
    const d = document.getElementById('mobile-drawer');
    d.classList.remove('is-open');
    d.setAttribute('aria-hidden', 'true');
    const btn = document.getElementById('btn-open-drawer');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    if (lenisInstance && !document.querySelector('.modal-backdrop.is-open')) {
      lenisInstance.start();
    }
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
  }

  function wireEvents() {
    document.querySelectorAll('[data-nav]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        switchView(el.dataset.nav, el);
      });
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextLang = btn.dataset.lang === 'id' ? 'id' : 'en';
        if (state.lang === nextLang) return;
        state.lang = nextLang;
        saveState();
        applyI18n(true);
      });
    });

    const heroExplore = document.getElementById('btn-hero-explore');
    if (heroExplore) {
      heroExplore.addEventListener('click', (e) => switchView('monitoring', e.currentTarget));
    }

    const handleHeroAuth = (e) => {
      const user = currentUser();
      if (user) {
        switchView(user.role === 'laboran' ? 'laboran' : 'reservasi', e.currentTarget);
      } else {
        openAuthModal('login', e.currentTarget);
      }
    };
    const heroAuth = document.getElementById('btn-hero-auth');
    const ctaLogin = document.getElementById('btn-cta-login');
    if (heroAuth) heroAuth.addEventListener('click', handleHeroAuth);
    if (ctaLogin) ctaLogin.addEventListener('click', handleHeroAuth);

    document.getElementById('view-landing').addEventListener('click', (e) => {
      const jumpBtn = e.target.closest('[data-jump-lab]');
      if (!jumpBtn) return;
      state.searchQuery = jumpBtn.dataset.jumpLab || '';
      state.labFilter = 'all';
      saveState();
      switchView('monitoring', jumpBtn);
    });

    document.getElementById('btn-quick-book').addEventListener('click', (e) => {
      document.getElementById('res-tanggal').value = state.selectedDate;
      switchView('reservasi', e.currentTarget);
    });

    const performLogout = (triggerEl = null) => {
      const u = currentUser();
      const labelName = u ? u.name : (isId() ? 'akun ini' : 'this account');
      const msg = isId()
        ? `Keluar dari akun ${labelName}? Anda perlu masuk lagi untuk mengajukan atau mengelola reservasi.`
        : `Sign out from ${labelName}? You will need to sign in again to book or manage reservations.`;
      openConfirm(msg, () => {
        state.currentUserId = null;
        pendingAuthCallback = null;
        saveState();
        updateHeaderAndCounts();
        switchView('landing');
        showGlobalFeedback(
          isId() ? `Anda telah keluar dari akun ${labelName}.` : `Signed out from ${labelName}.`,
          'warn'
        );
      }, triggerEl);
    };

    document.getElementById('mob-btn-login').addEventListener('click', () => {
      closeDrawer();
      openAuthModal('login');
    });
    document.getElementById('mob-btn-register').addEventListener('click', () => {
      closeDrawer();
      openAuthModal('register');
    });
    document.getElementById('btn-logout').addEventListener('click', (e) => performLogout(e.currentTarget));
    document.getElementById('mob-btn-logout').addEventListener('click', (e) => {
      closeDrawer();
      window.setTimeout(() => performLogout(e.currentTarget), 140);
    });

    document.getElementById('btn-login-laboran-guard').addEventListener('click', (e) => {
      openAuthModal('login', e.currentTarget, () => switchView('laboran'));
      document.getElementById('login-identity').value = 'laboran@ums.ac.id';
      document.getElementById('login-password').value = 'labspace123';
    });

    document.querySelectorAll('[data-toggle-pw]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const inp = document.getElementById(btn.dataset.togglePw);
        if (!inp) return;
        const nextType = inp.type === 'password' ? 'text' : 'password';
        inp.type = nextType;
        btn.classList.toggle('is-visible', nextType === 'text');
        btn.setAttribute('aria-pressed', nextType === 'text' ? 'true' : 'false');
        btn.setAttribute('aria-label', nextType === 'text' ? 'Hide password' : 'Show password');
      });
    });

    document.getElementById('btn-quick-mhs').addEventListener('click', () => {
      const mhsList = state.users.filter((u) => u.role === 'mahasiswa');
      const pick = mhsList[Math.floor(Math.random() * mhsList.length)] || mhsList[0];
      if (pick) {
        document.getElementById('login-identity').value = pick.email;
        document.getElementById('login-password').value = pick.password;
      }
    });

    document.getElementById('btn-quick-lab').addEventListener('click', () => {
      document.getElementById('login-identity').value = 'laboran@ums.ac.id';
      document.getElementById('login-password').value = 'labspace123';
    });

    document.getElementById('form-login').addEventListener('input', () => {
      document.getElementById('login-error').hidden = true;
    });
    document.getElementById('form-register').addEventListener('input', () => {
      document.getElementById('register-error').hidden = true;
    });
    document.getElementById('form-login').addEventListener('submit', (e) => {
      e.preventDefault();
      const ident = document.getElementById('login-identity').value.trim().toLowerCase();
      const pass = document.getElementById('login-password').value;
      const errBox = document.getElementById('login-error');
      const user = state.users.find(
        (u) => (u.email.toLowerCase() === ident || u.nim.toLowerCase() === ident) && u.password === pass
      );
      if (!user) {
        errBox.textContent = isId() ? 'Email/NIM atau kata sandi tidak cocok.' : 'Email/Student ID or password does not match.';
        errBox.hidden = false;
        const card = document.getElementById('login-page-card');
        if (card) {
          card.classList.remove('is-shaking');
          void card.offsetWidth;
          card.classList.add('is-shaking');
        }
        return;
      }
      state.currentUserId = user.id;
      saveState();
      updateHeaderAndCounts();
      const cb = pendingAuthCallback;
      pendingAuthCallback = null;
      if (cb) {
        cb();
      } else if (user.role === 'laboran') {
        switchView('laboran');
      } else {
        switchView('monitoring');
      }
      const roleLabel = user.role === 'laboran'
        ? (isId() ? 'Admin Laboran' : 'Lab Technician')
        : (isId() ? 'Mahasiswa' : 'Student');
      showGlobalFeedback(
        isId() ? `Berhasil masuk sebagai ${user.name} (${roleLabel}).` : `Signed in as ${user.name} (${roleLabel}).`
      );
    });

    document.getElementById('form-register').addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value.trim();
      const nim = document.getElementById('reg-nim').value.trim().toUpperCase();
      const prodi = (document.getElementById('reg-prodi')?.value || '').trim() || 'Teknik Informatika';
      const email = document.getElementById('reg-email').value.trim().toLowerCase();
      const password = document.getElementById('reg-password').value;
      const errBox = document.getElementById('register-error');
      const shakeReg = (msg) => {
        errBox.textContent = msg;
        errBox.hidden = false;
        const card = document.getElementById('register-page-card');
        if (card) {
          card.classList.remove('is-shaking');
          void card.offsetWidth;
          card.classList.add('is-shaking');
        }
      };

      if (name.length < 2 || !/^[A-Z0-9-]{5,20}$/.test(nim) || !email || password.length < 6) {
        shakeReg(
          isId()
            ? 'Isi nama (min. 2 huruf), NIM valid, email UMS, dan sandi minimal 6 karakter.'
            : 'Enter full name (min 2 chars), valid NIM, UMS email, and a 6+ character password.'
        );
        return;
      }
      if (!/^[^\s@]+@(student\.)?ums\.ac\.id$/i.test(email)) {
        shakeReg(
          isId()
            ? 'Gunakan email resmi @student.ums.ac.id atau @ums.ac.id.'
            : 'Please use an official @student.ums.ac.id or @ums.ac.id email.'
        );
        return;
      }
      const exists = state.users.some((u) => u.email.toLowerCase() === email || u.nim.toLowerCase() === nim.toLowerCase());
      if (exists) {
        shakeReg(isId() ? 'NIM atau email sudah terdaftar. Silakan masuk.' : 'Student ID or email is already registered. Please sign in.');
        return;
      }
      const nextId = state.users.reduce((m, u) => Math.max(m, u.id), 0) + 1;
      const newUser = { id: nextId, name, nim, email, password, role: 'mahasiswa', prodi, phone: '' };
      state.users.push(newUser);
      state.currentUserId = newUser.id;
      saveState();
      updateHeaderAndCounts();
      document.getElementById('form-register').reset();
      const cb = pendingAuthCallback;
      pendingAuthCallback = null;
      if (cb) cb();
      else switchView('monitoring');
      showGlobalFeedback(
        isId() ? `Akun ${newUser.name} (${newUser.nim}) berhasil dibuat.` : `Account created for ${newUser.name} (${newUser.nim}).`
      );
    });

    document.getElementById('btn-theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('mob-theme-toggle').addEventListener('click', toggleTheme);

    const copyIdBtn = document.getElementById('btn-copy-user-id');
    if (copyIdBtn) {
      copyIdBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const u = currentUser();
        if (!u) return;
        const text = u.nim || u.email || '';
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
          navigator.clipboard.writeText(text).catch(() => {});
        }
        showGlobalFeedback(isId() ? `ID ${text} disalin ke clipboard.` : `Copied ID ${text} to clipboard.`);
      });
    }

    const roleShortcutBtn = document.getElementById('menu-role-shortcut');
    if (roleShortcutBtn) {
      roleShortcutBtn.addEventListener('click', (e) => {
        const u = currentUser();
        if (!u) return;
        switchView(u.role === 'laboran' ? 'laboran' : 'riwayat', e.currentTarget);
      });
    }

    let selectedAvatarStyle = 'coder';
    const switchProfileTab = (tab = 'profile') => {
      document.querySelectorAll('[data-profile-tab]').forEach((btn) => {
        const active = btn.dataset.profileTab === tab;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      document.querySelectorAll('[data-profile-panel]').forEach((panel) => {
        const active = panel.dataset.profilePanel === tab;
        panel.hidden = !active;
        panel.classList.toggle('is-active', active);
      });
    };

    const syncProfilePreferences = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      document.querySelectorAll('[data-profile-lang]').forEach((btn) => {
        btn.classList.toggle('is-active', btn.dataset.profileLang === state.lang);
      });
      document.querySelectorAll('[data-profile-theme]').forEach((btn) => {
        btn.classList.toggle('is-active', btn.dataset.profileTheme === currentTheme);
      });
    };

    const updateProfilePreview = () => {
      const u = currentUser();
      if (!u) return;
      const isLaboran = u.role === 'laboran';
      const nameVal = (document.getElementById('profile-edit-name')?.value || '').trim() || u.name || '-';
      const prodiVal = (document.getElementById('profile-edit-prodi')?.value || '').trim() || u.prodi || (isLaboran ? 'Unit Laboratorium FKI' : 'Teknik Informatika');
      const avEl = document.getElementById('profile-preview-avatar');
      const nameEl = document.getElementById('profile-preview-name');
      const roleEl = document.getElementById('profile-preview-role');
      const nimEl = document.getElementById('profile-preview-nim');
      const prodiEl = document.getElementById('profile-preview-prodi');
      const st1Val = document.getElementById('profile-stat-1-val');
      const st1Lbl = document.getElementById('profile-stat-1-lbl');
      const st2Val = document.getElementById('profile-stat-2-val');
      const st2Lbl = document.getElementById('profile-stat-2-lbl');

      if (avEl) avEl.innerHTML = `${buildCharacterAvatarSvg(selectedAvatarStyle)}<span class="user-online-dot"></span>`;
      if (nameEl) nameEl.textContent = nameVal;
      if (nimEl) nimEl.textContent = u.nim || '-';
      if (prodiEl) prodiEl.textContent = prodiVal;
      if (roleEl) {
        roleEl.textContent = isLaboran ? (isId() ? 'Admin Laboran' : 'Lab Admin') : (isId() ? 'Mahasiswa' : 'Student');
        roleEl.classList.toggle('is-admin', isLaboran);
      }
      if (st1Val && st1Lbl && st2Val && st2Lbl) {
        if (isLaboran) {
          const pendingCount = state.reservasis.filter((r) => r.status === 'pending').length;
          const opLabs = state.labs.filter((l) => l.status !== 'maintenance').length;
          st1Val.textContent = String(pendingCount);
          st1Lbl.textContent = isId() ? 'Verifikasi' : 'Pending';
          st2Val.textContent = `${opLabs}/${state.labs.length}`;
          st2Lbl.textContent = isId() ? 'Lab Aktif' : 'Active Labs';
        } else {
          const myList = state.reservasis.filter((r) => r.user_id === u.id || r.pemohon_nim === u.nim);
          const activeMine = myList.filter((r) => r.status === 'pending' || r.status === 'approved').length;
          const approvedMine = myList.filter((r) => r.status === 'approved').length;
          st1Val.textContent = String(activeMine);
          st1Lbl.textContent = isId() ? 'Aktif' : 'Active';
          st2Val.textContent = String(approvedMine);
          st2Lbl.textContent = isId() ? 'E-Tiket' : 'E-Tickets';
        }
      }
    };

    const renderAvatarPicker = () => {
      const picker = document.getElementById('profile-avatar-picker');
      if (!picker) return;
      picker.innerHTML = CHARACTER_AVATARS.map((av) => {
        const active = av.id === selectedAvatarStyle;
        const lbl = isId() ? av.labelId : av.labelEn;
        return `<button type="button" class="avatar-choice-btn ${active ? 'is-selected' : ''}" data-avatar-pick="${av.id}" role="radio" aria-checked="${active ? 'true' : 'false'}">
          <span class="avatar-choice-preview">${buildCharacterAvatarSvg(av.id)}</span>
          <span>${escapeHtml(lbl)}</span>
        </button>`;
      }).join('');
    };

    const avatarPickerEl = document.getElementById('profile-avatar-picker');
    if (avatarPickerEl) {
      avatarPickerEl.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-avatar-pick]');
        if (!btn) return;
        selectedAvatarStyle = btn.dataset.avatarPick;
        renderAvatarPicker();
        updateProfilePreview();
      });
    }

    document.querySelectorAll('[data-profile-tab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const alertEl = document.getElementById('profile-edit-alert');
        if (alertEl) alertEl.hidden = true;
        switchProfileTab(btn.dataset.profileTab);
      });
    });

    ['profile-edit-name', 'profile-edit-prodi'].forEach((id) => {
      const inp = document.getElementById(id);
      if (inp) inp.addEventListener('input', updateProfilePreview);
    });

    document.querySelectorAll('[data-profile-lang]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextLang = btn.dataset.profileLang === 'id' ? 'id' : 'en';
        if (state.lang === nextLang) return;
        state.lang = nextLang;
        saveState();
        applyI18n(false);
        renderAvatarPicker();
        updateProfilePreview();
        syncProfilePreferences();
      });
    });

    document.querySelectorAll('[data-profile-theme]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextTheme = btn.dataset.profileTheme === 'dark' ? 'dark' : 'light';
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        if (currentTheme !== nextTheme) {
          toggleTheme();
        }
        syncProfilePreferences();
      });
    });

    const profileCopyIdBtn = document.getElementById('btn-profile-copy-id');
    if (profileCopyIdBtn) {
      profileCopyIdBtn.addEventListener('click', () => {
        const u = currentUser();
        if (!u) return;
        const text = u.nim || u.email || '';
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
          navigator.clipboard.writeText(text).catch(() => {});
        }
        showGlobalFeedback(isId() ? `ID ${text} disalin ke clipboard.` : `Copied ID ${text} to clipboard.`);
      });
    }

    const editProfileBtn = document.getElementById('menu-edit-profile');
    if (editProfileBtn) {
      editProfileBtn.addEventListener('click', (e) => {
        const u = currentUser();
        if (!u) return;
        const pop = document.getElementById('user-menu-popover');
        const popBtn = document.getElementById('btn-user-menu');
        if (pop && !pop.hidden) {
          pop.hidden = true;
          if (popBtn) popBtn.setAttribute('aria-expanded', 'false');
        }
        const alertEl = document.getElementById('profile-edit-alert');
        if (alertEl) alertEl.hidden = true;
        selectedAvatarStyle = resolveUserAvatarStyle(u);
        switchProfileTab('profile');
        renderAvatarPicker();
        document.getElementById('profile-edit-name').value = u.name || '';
        document.getElementById('profile-edit-nim').value = u.nim || '';
        document.getElementById('profile-edit-prodi').value = u.prodi || (u.role === 'laboran' ? 'Unit Laboratorium FKI' : 'Teknik Informatika');
        document.getElementById('profile-edit-phone').value = u.phone || '';
        document.getElementById('profile-edit-email').value = u.email || '';
        ['profile-edit-current-password', 'profile-edit-password', 'profile-edit-confirm-password'].forEach((pwId) => {
          const pwEl = document.getElementById(pwId);
          if (pwEl) {
            pwEl.value = '';
            pwEl.type = 'password';
          }
        });
        updateProfilePreview();
        syncProfilePreferences();
        openModal('modal-profile-edit', e.currentTarget);
      });
    }

    const profileEditForm = document.getElementById('form-profile-edit');
    if (profileEditForm) {
      profileEditForm.addEventListener('input', () => {
        const alertEl = document.getElementById('profile-edit-alert');
        if (alertEl) alertEl.hidden = true;
      });
      profileEditForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const u = currentUser();
        if (!u) return;
        const alertEl = document.getElementById('profile-edit-alert');
        const showErr = (msg, targetTab = 'profile') => {
          switchProfileTab(targetTab);
          alertEl.textContent = msg;
          alertEl.hidden = false;
          const dlg = document.querySelector('#modal-profile-edit .modal-dialog');
          if (dlg) {
            dlg.classList.remove('is-shaking');
            void dlg.offsetWidth;
            dlg.classList.add('is-shaking');
          }
        };

        const newName = document.getElementById('profile-edit-name').value.trim();
        const newProdi = document.getElementById('profile-edit-prodi').value.trim();
        const newPhone = document.getElementById('profile-edit-phone').value.trim();
        const newEmail = document.getElementById('profile-edit-email').value.trim().toLowerCase();
        const currPass = document.getElementById('profile-edit-current-password').value;
        const newPass = document.getElementById('profile-edit-password').value;
        const confirmPass = document.getElementById('profile-edit-confirm-password').value;

        if (newName.length < 2) {
          showErr(isId() ? 'Nama lengkap minimal 2 karakter.' : 'Full name must be at least 2 characters.', 'profile');
          return;
        }
        if (!/^[^\s@]+@(student\.)?ums\.ac\.id$/i.test(newEmail)) {
          showErr(isId() ? 'Gunakan email resmi @student.ums.ac.id atau @ums.ac.id.' : 'Please use an official @student.ums.ac.id or @ums.ac.id email.', 'profile');
          return;
        }
        if (state.users.some((x) => x.id !== u.id && x.email.toLowerCase() === newEmail)) {
          showErr(isId() ? 'Email sudah digunakan akun lain.' : 'Email is already in use by another account.', 'profile');
          return;
        }
        if (newPhone && newPhone.replace(/\D/g, '').length < 8) {
          showErr(isId() ? 'Nomor kontak / WhatsApp minimal 8 digit.' : 'Contact / WhatsApp number must contain at least 8 digits.', 'profile');
          return;
        }
        if (currPass || newPass || confirmPass) {
          if (currPass !== u.password) {
            showErr(isId() ? 'Kata sandi saat ini tidak cocok.' : 'Current password does not match.', 'security');
            return;
          }
          if (newPass.length < 6) {
            showErr(isId() ? 'Kata sandi baru minimal 6 karakter.' : 'New password must be at least 6 characters.', 'security');
            return;
          }
          if (newPass !== confirmPass) {
            showErr(isId() ? 'Konfirmasi kata sandi baru tidak cocok.' : 'New password confirmation does not match.', 'security');
            return;
          }
        }

        u.name = newName;
        u.prodi = newProdi || (u.role === 'laboran' ? 'Unit Laboratorium FKI' : 'Teknik Informatika');
        u.phone = newPhone;
        u.email = newEmail;
        u.avatarStyle = selectedAvatarStyle;
        if (newPass) u.password = newPass;
        saveState();
        updateHeaderAndCounts();
        closeModal('modal-profile-edit');
        showGlobalFeedback(isId() ? 'Pengaturan akun berhasil diperbarui.' : 'Account settings updated.');
      });
    }

    const userMenuBtn = document.getElementById('btn-user-menu');
    const userMenuPop = document.getElementById('user-menu-popover');
    if (userMenuBtn && userMenuPop) {
      userMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const willOpen = userMenuPop.hidden;
        userMenuPop.hidden = !willOpen;
        userMenuBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        const np = document.getElementById('notif-popover');
        if (np && !np.hidden) {
          np.hidden = true;
          document.getElementById('btn-notif').setAttribute('aria-expanded', 'false');
        }
      });
      userMenuPop.addEventListener('click', (e) => {
        if (e.target.closest('.user-menu-item')) {
          userMenuPop.hidden = true;
          userMenuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    const handleReset = () => {
      const msg = isId()
        ? 'Kembalikan seluruh data jadwal dan reservasi sesi ini ke kondisi awal?'
        : 'Reset all session schedules and reservations back to default?';
      openConfirm(msg, () => {
        const preservedLang = state.lang;
        localStorage.removeItem(STORAGE_KEY);
        state = createDefaultState();
        state.lang = preservedLang;
        saveState();
        applyI18n(false);
        switchView('landing');
        showGlobalFeedback(
          isId() ? 'Data sesi berhasil dikembalikan ke kondisi awal.' : 'Session data restored to default.'
        );
      });
    };
    document.getElementById('btn-reset-demo').addEventListener('click', handleReset);
    document.getElementById('mob-reset-demo').addEventListener('click', () => {
      closeDrawer();
      handleReset();
    });

    document.getElementById('btn-open-drawer').addEventListener('click', (e) => openDrawer(e.currentTarget));
    const collapseSidebarBtn = document.getElementById('btn-collapse-sidebar');
    if (collapseSidebarBtn) {
      collapseSidebarBtn.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-collapsed');
      });
    }
    const cfSidebarNav = document.getElementById('cf-sidebar-nav');
    if (cfSidebarNav) {
      cfSidebarNav.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-cf-view]');
        if (!btn) return;
        const targetView = btn.dataset.cfView;
        const targetLtab = btn.dataset.cfLtab;
        if (targetLtab) {
          state.activeLaboranTab = targetLtab;
          saveState();
        }
        switchView(targetView);
      });
    }
    const mobEditProfileBtn = document.getElementById('mob-btn-edit-profile');
    if (mobEditProfileBtn && editProfileBtn) {
      mobEditProfileBtn.addEventListener('click', (e) => {
        closeDrawer();
        editProfileBtn.click();
      });
    }

    const headerSearchInput = document.getElementById('header-quick-search');
    const headerSearchResults = document.getElementById('header-search-results');
    const renderHeaderSearch = () => {
      if (!headerSearchInput || !headerSearchResults) return;
      const q = headerSearchInput.value.trim().toLowerCase();
      if (!q) {
        headerSearchResults.hidden = true;
        return;
      }
      const role = currentRole();
      const navItems = role === 'laboran'
        ? [
            { label: tr('nav_availability'), sub: tr('cf_group_workspace'), view: 'monitoring' },
            { label: tr('ltab_verif'), sub: tr('nav_admin'), view: 'laboran', ltab: 'verifikasi' },
            { label: tr('ltab_labs'), sub: tr('nav_admin'), view: 'laboran', ltab: 'labs' },
            { label: tr('ltab_jadwal'), sub: tr('nav_admin'), view: 'laboran', ltab: 'jadwal' },
            { label: tr('ltab_rekap'), sub: tr('nav_admin'), view: 'laboran', ltab: 'rekap' },
            { label: tr('ltab_users'), sub: tr('nav_admin'), view: 'laboran', ltab: 'users' }
          ]
        : [
            { label: tr('nav_availability'), sub: tr('cf_group_workspace'), view: 'monitoring' },
            { label: tr('nav_book'), sub: tr('cf_group_workspace'), view: 'reservasi' },
            { label: tr('nav_my_bookings'), sub: tr('cf_group_workspace'), view: 'riwayat' },
            { label: tr('nav_finder'), sub: tr('cf_group_student_tools'), view: 'finder' },
            { label: tr('nav_labs_dir'), sub: tr('cf_group_student_tools'), view: 'labs' },
            { label: tr('nav_tickets'), sub: tr('cf_group_student_tools'), view: 'tickets' }
          ];
      const labItems = state.labs.map((l) => ({
        label: `${l.kode} · ${labDisplayName(l)}`,
        sub: `${l.kapasitas} PC`,
        view: 'monitoring',
        labCode: l.kode,
        searchBlob: `${l.kode} ${l.nama_id} ${l.nama_en} ${l.spesifikasi}`.toLowerCase()
      }));
      const curU = currentUser();
      const bookingItems = (role === 'laboran'
        ? state.reservasis
        : state.reservasis.filter((r) => curU && (r.user_id === curU.id || r.pemohon_nim === curU.nim))
      ).map((r) => {
        const lab = state.labs.find((l) => l.id === r.lab_id);
        return {
          label: `${r.kode_tiket} · ${lab ? lab.kode : ''}`,
          sub: `${r.tanggal} (${r.status})`,
          view: role === 'laboran' ? 'laboran' : (r.status === 'approved' ? 'tickets' : 'riwayat'),
          ltab: role === 'laboran' ? 'verifikasi' : '',
          searchBlob: `${r.kode_tiket} ${r.pemohon_nama} ${r.keperluan} ${lab ? lab.kode : ''}`.toLowerCase()
        };
      });
      const matches = [
        ...navItems.filter((x) => x.label.toLowerCase().includes(q) || x.sub.toLowerCase().includes(q)),
        ...labItems.filter((x) => x.searchBlob.includes(q)),
        ...bookingItems.filter((x) => x.searchBlob.includes(q))
      ].slice(0, 8);

      if (matches.length === 0) {
        headerSearchResults.innerHTML = `<div class="header-search-item" style="cursor:default;color:var(--ink-muted);">${isId() ? 'Tidak ada hasil cocok' : 'No matching items'}</div>`;
      } else {
        headerSearchResults.innerHTML = matches
          .map((m) => `<button type="button" class="header-search-item" data-hs-view="${m.view}" ${m.ltab ? `data-hs-ltab="${m.ltab}"` : ''} ${m.labCode ? `data-hs-lab="${escapeHtml(m.labCode)}"` : ''}>
            <span>${escapeHtml(m.label)}</span>
            <small>${escapeHtml(m.sub)}</small>
          </button>`)
          .join('');
      }
      headerSearchResults.hidden = false;
    };
    if (headerSearchInput && headerSearchResults) {
      headerSearchInput.addEventListener('input', renderHeaderSearch);
      headerSearchInput.addEventListener('focus', renderHeaderSearch);
      headerSearchResults.addEventListener('click', (e) => {
        const item = e.target.closest('[data-hs-view]');
        if (!item) return;
        const targetView = item.dataset.hsView;
        if (item.dataset.hsLtab) {
          state.activeLaboranTab = item.dataset.hsLtab;
          saveState();
        }
        if (item.dataset.hsLab) {
          state.searchQuery = item.dataset.hsLab;
          saveState();
        }
        headerSearchResults.hidden = true;
        headerSearchInput.value = '';
        switchView(targetView, item);
      });
      document.addEventListener('click', (e) => {
        if (!e.target.closest('#header-search-wrap')) headerSearchResults.hidden = true;
      });
    }

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' && currentUser() && window.innerWidth > 760) {
        e.preventDefault();
        const qInput = document.getElementById('header-quick-search');
        if (qInput) {
          qInput.focus();
          qInput.select();
        }
      }
    });
    const drawerNavList = document.getElementById('drawer-nav-list');
    if (drawerNavList) {
      drawerNavList.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-drawer-view]');
        if (!btn) return;
        const targetView = btn.dataset.drawerView;
        const targetLtab = btn.dataset.drawerLtab;
        if (targetLtab) {
          state.activeLaboranTab = targetLtab;
          saveState();
        }
        closeDrawer();
        switchView(targetView);
      });
    }
    document.getElementById('btn-close-drawer').addEventListener('click', closeDrawer);
    document.getElementById('drawer-scrim').addEventListener('click', closeDrawer);

    const triggerDateReload = (newDate) => {
      state.selectedDate = newDate;
      saveState();
      const loader = document.getElementById('monitoring-loading');
      loader.classList.add('is-visible');
      window.setTimeout(() => {
        loader.classList.remove('is-visible');
        renderMonitoring();
      }, 130);
    };

    const filterDateEl = document.getElementById('filter-date');
    filterDateEl.addEventListener('change', (e) => {
      if (e.target.value) triggerDateReload(e.target.value);
    });
    const dateLabel = filterDateEl.closest('.stepper-date');
    if (dateLabel && typeof filterDateEl.showPicker === 'function') {
      dateLabel.addEventListener('click', () => {
        try { filterDateEl.showPicker(); } catch {}
      });
    }
    document.getElementById('btn-prev-day').addEventListener('click', () => triggerDateReload(addDays(state.selectedDate, -1)));
    document.getElementById('btn-next-day').addEventListener('click', () => triggerDateReload(addDays(state.selectedDate, 1)));
    document.getElementById('btn-today').addEventListener('click', () => triggerDateReload(toIsoDate(new Date())));

    document.querySelectorAll('[data-cal-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.calendarMode = btn.dataset.calMode;
        saveState();
        renderMonitoring();
      });
    });

    document.querySelectorAll('[data-lab-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.labFilter = btn.dataset.labFilter;
        saveState();
        renderMonitoring();
      });
    });
    document.getElementById('btn-clear-lab-filter').addEventListener('click', () => {
      state.labFilter = 'all';
      state.searchQuery = '';
      saveState();
      renderMonitoring();
    });

    document.getElementById('lab-search').addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      saveState();
      renderMonitoring({ animate: false });
    });

    document.getElementById('btn-clear-search').addEventListener('click', () => {
      state.searchQuery = '';
      saveState();
      renderMonitoring({ animate: false });
      document.getElementById('lab-search').focus();
    });

    const notifBtn = document.getElementById('btn-notif');
    const notifPop = document.getElementById('notif-popover');
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = notifPop.hidden;
      notifPop.hidden = !willOpen;
      notifBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      if (willOpen) renderNotifications();
    });

    document.getElementById('btn-notif-read').addEventListener('click', () => {
      const keys = getNotificationsForUser().map((n) => n.key);
      state.notifReadKeys = Array.from(new Set([...state.notifReadKeys, ...keys]));
      saveState();
      renderNotifications();
    });

    document.getElementById('notif-list').addEventListener('click', (e) => {
      const item = e.target.closest('[data-notif-view]');
      if (!item) return;
      notifPop.hidden = true;
      notifBtn.setAttribute('aria-expanded', 'false');
      const view = item.dataset.notifView;
      const permitId = item.dataset.notifPermit;
      switchView(view);
      if (permitId) openPermitModal(permitId, notifBtn);
    });

    document.addEventListener('click', (e) => {
      if (!notifPop.hidden && !e.target.closest('#notif-wrap')) {
        notifPop.hidden = true;
        notifBtn.setAttribute('aria-expanded', 'false');
      }
      const uPop = document.getElementById('user-menu-popover');
      const uBtn = document.getElementById('btn-user-menu');
      if (uPop && !uPop.hidden && !e.target.closest('#user-menu-wrap')) {
        uPop.hidden = true;
        if (uBtn) uBtn.setAttribute('aria-expanded', 'false');
      }
    });

    const roomTabsEl = document.getElementById('monitoring-room-tabs');
    if (roomTabsEl) {
      roomTabsEl.addEventListener('click', (e) => {
        const tabBtn = e.target.closest('[data-room-tab]');
        if (!tabBtn) return;
        const target = tabBtn.dataset.roomTab;
        if (target === 'all') {
          if (state.monitoringTab === 'all') {
            state.monitoringTab = state.lastRoomTab || String(state.labs[0]?.id || '1');
          } else {
            state.lastRoomTab = state.monitoringTab;
            state.monitoringTab = 'all';
          }
        } else {
          state.lastRoomTab = target;
          state.monitoringTab = target;
        }
        saveState();
        renderMonitoring();
      });
    }

    document.getElementById('lab-monitoring-list').addEventListener('click', (e) => {
      const inspectBtn = e.target.closest('[data-inspect-room]');
      if (inspectBtn) {
        state.monitoringTab = String(inspectBtn.dataset.inspectRoom);
        saveState();
        renderMonitoring();
        return;
      }
      const reqBtn = e.target.closest('[data-request-room]');
      if (reqBtn && !reqBtn.disabled) {
        const targetLabId = String(reqBtn.dataset.requestRoom);
        const goReq = () => {
          if (currentRole() === 'laboran') {
            showGlobalFeedback(isId() ? 'Masuk sebagai Mahasiswa untuk mengajukan reservasi ruang.' : 'Sign in as a Student to submit room reservations.', 'error');
            return;
          }
          populateSelects();
          const sel = document.getElementById('res-lab');
          if (sel) sel.value = targetLabId;
          const dt = document.getElementById('res-tanggal');
          if (dt) dt.value = state.selectedDate;
          switchView('reservasi', reqBtn);
        };
        if (currentRole() === 'guest') {
          openAuthModal('login', reqBtn, goReq);
        } else {
          goReq();
        }
        return;
      }
      const subTabBtn = e.target.closest('[data-room-subtab]');
      if (subTabBtn) {
        state.roomSubTab = subTabBtn.dataset.roomSubtab === 'specs' ? 'specs' : 'schedule';
        saveState();
        renderMonitoring({ animate: false });
        return;
      }
      const weekCell = e.target.closest('[data-pick-date]');
      if (weekCell) {
        state.selectedDate = weekCell.dataset.pickDate;
        state.calendarMode = 'daily';
        saveState();
        renderMonitoring();
        return;
      }
      const cell = e.target.closest('[data-slot]');
      if (!cell || cell.disabled) return;
      const data = JSON.parse(decodeURIComponent(cell.dataset.slot));
      if (data.kind === 'open') {
        const goReserve = () => {
          if (currentRole() === 'laboran') {
            showGlobalFeedback(isId() ? 'Masuk sebagai Mahasiswa untuk mengajukan reservasi ruang.' : 'Sign in as a Student to submit room reservations.', 'error');
            return;
          }
          populateSelects();
          document.getElementById('res-lab').value = String(data.labId);
          document.getElementById('res-tanggal').value = state.selectedDate;
          document.getElementById('res-mulai').value = data.start;
          document.getElementById('res-selesai').value = data.end;
          switchView('reservasi');
        };
        if (currentRole() === 'guest') {
          openAuthModal('login', cell, goReserve);
        } else {
          goReserve();
        }
        return;
      }
      const lab = state.labs.find((l) => l.id === data.labId);
      const body = document.getElementById('modal-slot-body');
      const labCode = lab ? lab.kode : 'Lab';
      if (data.kind === 'praktikum' && data.detail) {
        body.innerHTML = `<p><strong>${escapeHtml(labCode)} - ${escapeHtml(labDisplayName(lab))}</strong></p>
          <p>${isId() ? 'Slot pukul' : 'Time block'} <span class="mono">${data.detail.jam_mulai} - ${data.detail.jam_selesai}</span> ${isId() ? 'terpakai untuk jadwal praktikum rutin:' : 'is reserved for a routine practicum:'}</p>
          <div class="alert-box alert-error" style="margin-bottom:0;">
            <strong>${escapeHtml(data.detail.mata_kuliah)} (${escapeHtml(data.detail.kelas)})</strong>
            <span>${isId() ? 'Pengampu' : 'Instructor'}: ${escapeHtml(data.detail.pengampu)}</span>
          </div>`;
      } else if (data.detail) {
        body.innerHTML = `<p><strong>${escapeHtml(labCode)} - ${escapeHtml(labDisplayName(lab))}</strong></p>
          <p>${isId() ? 'Slot pukul' : 'Time block'} <span class="mono">${data.detail.jam_mulai} - ${data.detail.jam_selesai}</span> ${isId() ? 'tercatat dalam reservasi' : 'is assigned to booking'} <span class="mono">${escapeHtml(data.detail.kode_tiket)}</span>:</p>
          <div class="alert-box alert-warn" style="margin-bottom:0;">
            <strong>${isId() ? 'Pemohon' : 'Applicant'}: ${escapeHtml(data.detail.pemohon_nama)} (${escapeHtml(data.detail.pemohon_nim)})</strong>
            <span>${isId() ? 'Keperluan' : 'Purpose'}: ${escapeHtml(data.detail.keperluan)}</span>
          </div>`;
      }
      openModal('modal-slot', cell);
    });

    const bindAutoEndTime = (startId, endId) => {
      const startSel = document.getElementById(startId);
      const endSel = document.getElementById(endId);
      if (!startSel || !endSel) return;
      startSel.addEventListener('change', () => {
        const startMins = parseTimeMinutes(startSel.value);
        if (Number.isNaN(startMins)) return;
        const nextHour = Math.min(21, Math.floor(startMins / 60) + 1);
        const nextVal = `${String(nextHour).padStart(2, '0')}:00`;
        if (Array.from(endSel.options).some((o) => o.value === nextVal)) {
          endSel.value = nextVal;
          endSel.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    };
    bindAutoEndTime('res-mulai', 'res-selesai');
    bindAutoEndTime('edit-res-mulai', 'edit-res-selesai');
    bindAutoEndTime('jadwal-crud-mulai', 'jadwal-crud-selesai');
    bindAutoEndTime('admin-book-mulai', 'admin-book-selesai');

    ['res-lab', 'res-tanggal', 'res-mulai', 'res-selesai', 'res-peserta'].forEach((id) => {
      document.getElementById(id).addEventListener('change', renderReservationFormContext);
      document.getElementById(id).addEventListener('input', renderReservationFormContext);
    });

    ['finder-date', 'finder-duration', 'finder-min-pc', 'finder-keyword'].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('change', renderSmartFinder);
      el.addEventListener('input', renderSmartFinder);
    });

    const finderGrid = document.getElementById('finder-results-grid');
    if (finderGrid) {
      finderGrid.addEventListener('click', (e) => {
        const slotBtn = e.target.closest('[data-finder-book]');
        if (!slotBtn) return;
        document.getElementById('res-lab').value = slotBtn.dataset.finderBook;
        document.getElementById('res-tanggal').value = slotBtn.dataset.finderDate;
        document.getElementById('res-mulai').value = slotBtn.dataset.finderStart;
        document.getElementById('res-selesai').value = slotBtn.dataset.finderEnd;
        const minPcVal = document.getElementById('finder-min-pc')?.value;
        if (minPcVal) document.getElementById('res-peserta').value = minPcVal;
        ['res-lab', 'res-mulai', 'res-selesai'].forEach((id) => {
          document.getElementById(id).dispatchEvent(new Event('change', { bubbles: true }));
        });
        switchView('reservasi', slotBtn);
      });
    }

    const stuLabsGrid = document.getElementById('student-labs-grid');
    if (stuLabsGrid) {
      stuLabsGrid.addEventListener('click', (e) => {
        const bookBtn = e.target.closest('[data-dir-book]');
        if (!bookBtn) return;
        const labEl = document.getElementById('res-lab');
        if (labEl) {
          labEl.value = bookBtn.dataset.dirBook;
          labEl.dispatchEvent(new Event('change', { bubbles: true }));
        }
        switchView('reservasi', bookBtn);
      });
    }

    const stuPracFilter = document.getElementById('student-prac-lab-filter');
    if (stuPracFilter) {
      stuPracFilter.addEventListener('change', renderStudentLabsDirectory);
    }

    const walletGrid = document.getElementById('tickets-wallet-grid');
    if (walletGrid) {
      walletGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-view-ticket]');
        if (!btn) return;
        openPermitModal(Number(btn.dataset.viewTicket), btn);
      });
    }

    const walletGoBook = document.getElementById('btn-tickets-go-book');
    if (walletGoBook) {
      walletGoBook.addEventListener('click', (e) => switchView('reservasi', e.currentTarget));
    }

    document.getElementById('form-reservasi').addEventListener('submit', (e) => {
      e.preventDefault();
      const labId = Number(document.getElementById('res-lab').value);
      const tanggal = document.getElementById('res-tanggal').value;
      const jamMulai = document.getElementById('res-mulai').value;
      const jamSelesai = document.getElementById('res-selesai').value;
      const peserta = Number(document.getElementById('res-peserta').value);
      const keperluan = document.getElementById('res-keperluan').value.trim();
      const anggota = document.getElementById('res-anggota').value.trim();

      const check = checkReservationConflict({ labId, tanggal, jamMulai, jamSelesai, peserta });
      if (!check.ok) {
        renderReservationFormContext();
        showGlobalFeedback(check.reason, 'error');
        return;
      }
      if (!keperluan || !anggota) {
        showGlobalFeedback(isId() ? 'Keperluan dan daftar anggota wajib diisi sebelum mengirim.' : 'Purpose and team members are required before submitting.', 'error');
        return;
      }

      const user = currentUser();
      if (!user || user.role !== 'mahasiswa') {
        openAuthModal('login');
        return;
      }
      const nextId = state.reservasis.reduce((m, r) => Math.max(m, r.id), 500) + 1;
      const kode = `LS-2026-${String(nextId).padStart(4, '0')}`;
      state.reservasis.unshift({
        id: nextId,
        kode_tiket: kode,
        pemohon_nama: user.name,
        pemohon_nim: user.nim,
        lab_id: labId,
        tanggal,
        jam_mulai: jamMulai,
        jam_selesai: jamSelesai,
        peserta,
        keperluan,
        anggota,
        status: 'pending',
        catatan_laboran: ''
      });
      saveState();
      updateHeaderAndCounts();
      document.getElementById('form-reservasi').reset();
      state.mineFilter = 'all';
      switchView('riwayat');
      showGlobalFeedback(
        isId() ? `Pengajuan ${kode} berhasil dikirim dan menunggu verifikasi laboran.` : `Request ${kode} submitted and awaiting lab technician verification.`
      );
    });

    document.querySelectorAll('[data-mine-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.mineFilter = btn.dataset.mineFilter;
        saveState();
        renderMineTable();
      });
    });

    document.getElementById('mine-tbody').addEventListener('click', (e) => {
      const me = currentUser();
      if (!me) return;
      const permitBtn = e.target.closest('[data-view-permit]');
      if (permitBtn) {
        openPermitModal(permitBtn.dataset.viewPermit, permitBtn);
        return;
      }
      const editBtn = e.target.closest('[data-edit-res]');
      if (editBtn) {
        const r = state.reservasis.find((x) => x.id === Number(editBtn.dataset.editRes));
        if (!r || r.pemohon_nim !== me.nim || r.status !== 'pending') return;
        populateSelects();
        document.getElementById('edit-res-id').value = String(r.id);
        document.getElementById('edit-res-lab').value = String(r.lab_id);
        document.getElementById('edit-res-tanggal').value = r.tanggal;
        document.getElementById('edit-res-peserta').value = String(r.peserta);
        document.getElementById('edit-res-mulai').value = r.jam_mulai;
        document.getElementById('edit-res-selesai').value = r.jam_selesai;
        document.getElementById('edit-res-keperluan').value = r.keperluan;
        document.getElementById('edit-res-anggota').value = r.anggota;
        document.getElementById('edit-res-error').hidden = true;
        openModal('modal-edit-res', editBtn);
        return;
      }
      const cancelBtn = e.target.closest('[data-cancel-res]');
      if (cancelBtn) {
        const id = Number(cancelBtn.dataset.cancelRes);
        const targetItem = state.reservasis.find((x) => x.id === id);
        if (!targetItem || targetItem.pemohon_nim !== me.nim || targetItem.status !== 'pending') return;
        const msg = isId() ? 'Batalkan pengajuan reservasi yang masih menunggu persetujuan ini?' : 'Cancel this pending booking request?';
        openConfirm(msg, () => {
          const item = state.reservasis.find((x) => x.id === id);
          if (item && item.pemohon_nim === me.nim && item.status === 'pending') item.status = 'cancelled';
          saveState();
          updateHeaderAndCounts();
          renderMineTable();
          showGlobalFeedback(isId() ? 'Pengajuan reservasi dibatalkan.' : 'Booking request cancelled.', 'warn');
        }, cancelBtn);
        return;
      }
      const delBtn = e.target.closest('[data-delete-res]');
      if (delBtn) {
        const id = Number(delBtn.dataset.deleteRes);
        const targetItem = state.reservasis.find((x) => x.id === id);
        if (!targetItem || targetItem.pemohon_nim !== me.nim || (targetItem.status !== 'rejected' && targetItem.status !== 'cancelled')) return;
        const msg = isId() ? 'Hapus riwayat pengajuan ini dari daftar?' : 'Remove this booking record from your history?';
        openConfirm(msg, () => {
          state.reservasis = state.reservasis.filter((x) => !(x.id === id && x.pemohon_nim === me.nim));
          saveState();
          updateHeaderAndCounts();
          renderMineTable();
          showGlobalFeedback(isId() ? 'Riwayat pengajuan dihapus.' : 'Booking record removed.');
        }, delBtn);
      }
    });

    document.getElementById('form-edit-res').addEventListener('input', () => {
      document.getElementById('edit-res-error').hidden = true;
    });
    document.getElementById('form-edit-res').addEventListener('submit', (e) => {
      e.preventDefault();
      const id = Number(document.getElementById('edit-res-id').value);
      const labId = Number(document.getElementById('edit-res-lab').value);
      const tanggal = document.getElementById('edit-res-tanggal').value;
      const peserta = Number(document.getElementById('edit-res-peserta').value);
      const jamMulai = document.getElementById('edit-res-mulai').value;
      const jamSelesai = document.getElementById('edit-res-selesai').value;
      const keperluan = document.getElementById('edit-res-keperluan').value.trim();
      const anggota = document.getElementById('edit-res-anggota').value.trim();

      const errBox = document.getElementById('edit-res-error');
      const check = checkReservationConflict({ labId, tanggal, jamMulai, jamSelesai, peserta, excludeResId: id });
      if (!check.ok || !keperluan || !anggota) {
        errBox.textContent = !check.ok ? check.reason : (isId() ? 'Keperluan dan anggota wajib diisi.' : 'Purpose and team members are required.');
        errBox.hidden = false;
        return;
      }
      const target = state.reservasis.find((x) => x.id === id);
      const me = currentUser();
      if (!target || !me || target.pemohon_nim !== me.nim || target.status !== 'pending') return;
      Object.assign(target, { lab_id: labId, tanggal, peserta, jam_mulai: jamMulai, jam_selesai: jamSelesai, keperluan, anggota });
      saveState();
      closeModal('modal-edit-res');
      renderMineTable();
      showGlobalFeedback(isId() ? 'Perubahan reservasi berhasil disimpan.' : 'Booking changes saved.');
    });

    document.querySelectorAll('[data-ltab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.activeLaboranTab = btn.dataset.ltab;
        saveState();
        renderLaboranPanels();
        if (currentUser()) {
          const role = currentRole();
          const payload = {
            isMahasiswa: role === 'mahasiswa',
            isLaboran: role === 'laboran',
            myCount: 0,
            pendingCount: state.reservasis.filter((r) => r.status === 'pending').length
          };
          renderDrawerNav(payload);
          renderCloudflareSidebar(payload);
        }
      });
    });

    document.getElementById('verifikasi-tbody').addEventListener('click', (e) => {
      const permitBtn = e.target.closest('[data-view-permit]');
      if (permitBtn) {
        openPermitModal(permitBtn.dataset.viewPermit, permitBtn);
        return;
      }
      const vBtn = e.target.closest('[data-verify-res]');
      if (!vBtn) return;
      const r = state.reservasis.find((x) => x.id === Number(vBtn.dataset.verifyRes));
      if (!r) return;
      const action = vBtn.dataset.vaction;
      document.getElementById('verify-res-id').value = String(r.id);
      document.getElementById('verify-action').value = action;
      document.getElementById('modal-verify-title').textContent =
        action === 'approved'
          ? (isId() ? 'Setujui Permohonan Lab' : 'Approve Lab Request')
          : (isId() ? 'Tolak Permohonan Lab' : 'Reject Lab Request');
      document.getElementById('verify-summary').textContent =
        `${r.kode_tiket} - ${r.pemohon_nama} (${formatDisplayDate(r.tanggal)}, ${r.jam_mulai} - ${r.jam_selesai}).`;
      document.getElementById('verify-note').value = action === 'approved'
        ? (isId() ? 'Kunci ruang dapat diambil di ruang teknisi lantai 2.' : 'Pick up room key in technician office floor 2.')
        : '';
      document.getElementById('verify-note').placeholder = action === 'approved'
        ? (isId() ? 'Catatan tambahan (opsional)' : 'Additional note (optional)')
        : (isId() ? 'Pilih alasan cepat di atas atau tulis catatan (opsional)' : 'Pick a quick reason above or type a note (optional)');

      const presetReasons = action === 'approved'
        ? (isId()
            ? [
                'Kunci diambil di ruang teknisi lt. 2 (jaminan KTM)',
                'Wajib matikan PC & jaga kebersihan selesai pakai'
              ]
            : [
                'Pick up room key in technician office floor 2 (student ID)',
                'Power off PCs and keep room clean after session'
              ])
        : (isId()
            ? [
                'Lab dipakai jadwal mendadak',
                'Ruang sedang maintenance',
                'Di luar jam layanan laboran',
                'Data kegiatan belum lengkap'
              ]
            : [
                'Room needed for urgent class',
                'Room under maintenance',
                'Outside technician hours',
                'Incomplete activity details'
              ]);

      const presetSelect = document.getElementById('verify-preset-select');
      if (presetSelect) {
        const customOpt = `<option value="">${escapeHtml(tr('opt_custom_reason'))}</option>`;
        presetSelect.innerHTML =
          customOpt +
          presetReasons.map((txt) => `<option value="${escapeHtml(txt)}">${escapeHtml(txt)}</option>`).join('');
        presetSelect.value = '';
      }
      document.getElementById('verify-error').hidden = true;
      openModal('modal-verify', vBtn);
    });

    const verifyPresetSelect = document.getElementById('verify-preset-select');
    if (verifyPresetSelect) {
      verifyPresetSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val) {
          document.getElementById('verify-note').value = val;
        }
        document.getElementById('verify-error').hidden = true;
      });
    }

    document.getElementById('form-verify').addEventListener('submit', (e) => {
      e.preventDefault();
      if (currentRole() !== 'laboran') return;
      const id = Number(document.getElementById('verify-res-id').value);
      const action = document.getElementById('verify-action').value;
      let note = document.getElementById('verify-note').value.trim();
      const errBox = document.getElementById('verify-error');
      if (action === 'rejected' && !note) {
        note = isId() ? 'Ditolak oleh laboran.' : 'Rejected by lab technician.';
      }
      const r = state.reservasis.find((x) => x.id === id);
      if (r && action === 'approved') {
        const conflict = checkReservationConflict({
          labId: r.lab_id,
          tanggal: r.tanggal,
          jamMulai: r.jam_mulai,
          jamSelesai: r.jam_selesai,
          peserta: r.peserta,
          excludeResId: r.id
        });
        if (!conflict.ok) {
          errBox.textContent = isId() ? `Tidak dapat disetujui: ${conflict.reason}` : `Cannot approve: ${conflict.reason}`;
          errBox.hidden = false;
          return;
        }
      }
      if (r) {
        r.status = action;
        r.catatan_laboran = note;
        saveState();
      }
      closeModal('modal-verify');
      renderLaboranPanels();
      showGlobalFeedback(
        action === 'approved'
          ? (isId() ? 'Pengajuan berhasil disetujui.' : 'Booking request approved.')
          : (isId() ? 'Pengajuan ditolak.' : 'Booking request rejected.'),
        action === 'approved' ? 'ok' : 'warn'
      );
    });

    document.getElementById('btn-add-lab').addEventListener('click', (e) => {
      document.getElementById('lab-crud-id').value = '';
      document.getElementById('form-lab-crud').reset();
      document.getElementById('modal-lab-crud-title').textContent = isId() ? 'Tambah Ruang Lab' : 'Add Lab Room';
      openModal('modal-lab-crud', e.currentTarget);
    });

    document.querySelectorAll('[data-verif-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.verifFilter = btn.dataset.verifFilter;
        saveState();
        renderLaboranPanels();
      });
    });

    const verifSearchEl = document.getElementById('admin-verif-search');
    if (verifSearchEl) {
      verifSearchEl.addEventListener('input', (e) => {
        state.verifSearch = e.target.value;
        saveState();
        renderLaboranPanels();
      });
    }
    const verifClearEl = document.getElementById('btn-clear-verif-search');
    if (verifClearEl) {
      verifClearEl.addEventListener('click', () => {
        state.verifSearch = '';
        saveState();
        renderLaboranPanels();
        if (verifSearchEl) verifSearchEl.focus();
      });
    }

    const jadwalSearchEl = document.getElementById('admin-jadwal-search');
    if (jadwalSearchEl) {
      jadwalSearchEl.addEventListener('input', (e) => {
        state.jadwalSearch = e.target.value;
        saveState();
        renderLaboranPanels();
      });
    }
    const jadwalClearEl = document.getElementById('btn-clear-jadwal-search');
    if (jadwalClearEl) {
      jadwalClearEl.addEventListener('click', () => {
        state.jadwalSearch = '';
        saveState();
        renderLaboranPanels();
        if (jadwalSearchEl) jadwalSearchEl.focus();
      });
    }
    const jadwalLabFilterEl = document.getElementById('admin-jadwal-lab-filter');
    if (jadwalLabFilterEl) {
      jadwalLabFilterEl.addEventListener('change', (e) => {
        state.jadwalLabFilter = e.target.value;
        saveState();
        renderLaboranPanels();
      });
    }
    const jadwalDayFilterEl = document.getElementById('admin-jadwal-day-filter');
    if (jadwalDayFilterEl) {
      jadwalDayFilterEl.addEventListener('change', (e) => {
        state.jadwalDayFilter = e.target.value;
        saveState();
        renderLaboranPanels();
      });
    }

    document.getElementById('crud-labs-tbody').addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('[data-toggle-lab-status]');
      if (toggleBtn) {
        const l = state.labs.find((x) => x.id === Number(toggleBtn.dataset.toggleLabStatus));
        if (!l) return;
        l.status = l.status === 'aktif' ? 'maintenance' : 'aktif';
        saveState();
        populateSelects();
        renderLaboranPanels();
        renderMonitoring();
        showGlobalFeedback(
          isId()
            ? `${l.kode} diubah menjadi ${l.status === 'aktif' ? 'Aktif' : 'Maintenance'}.`
            : `${l.kode} set to ${l.status === 'aktif' ? 'Active' : 'Maintenance'}.`,
          l.status === 'aktif' ? 'ok' : 'warn'
        );
        return;
      }
      const editBtn = e.target.closest('[data-edit-lab]');
      if (editBtn) {
        const l = state.labs.find((x) => x.id === Number(editBtn.dataset.editLab));
        if (!l) return;
        document.getElementById('lab-crud-id').value = String(l.id);
        document.getElementById('lab-crud-kode').value = l.kode;
        document.getElementById('lab-crud-nama').value = labDisplayName(l);
        document.getElementById('lab-crud-kapasitas').value = String(l.kapasitas);
        document.getElementById('lab-crud-spek').value = l.spesifikasi;
        document.getElementById('lab-crud-status').value = l.status;
        document.getElementById('modal-lab-crud-title').textContent = isId() ? `Edit Ruang ${l.kode}` : `Edit Room ${l.kode}`;
        openModal('modal-lab-crud', editBtn);
        return;
      }
      const delBtn = e.target.closest('[data-delete-lab]');
      if (delBtn) {
        const id = Number(delBtn.dataset.deleteLab);
        const msg = isId()
          ? 'Hapus ruang lab ini beserta jadwal rutin dan reservasi terkait?'
          : 'Delete this lab room along with its routine schedules and related bookings?';
        openConfirm(msg, () => {
          state.labs = state.labs.filter((x) => x.id !== id);
          state.jadwalRutin = state.jadwalRutin.filter((j) => j.lab_id !== id);
          state.reservasis = state.reservasis.filter((r) => r.lab_id !== id);
          saveState();
          populateSelects();
          updateHeaderAndCounts();
          renderLaboranPanels();
          showGlobalFeedback(isId() ? 'Data ruang lab dihapus.' : 'Lab room deleted.', 'warn');
        }, delBtn);
      }
    });

    document.getElementById('form-lab-crud').addEventListener('submit', (e) => {
      e.preventDefault();
      if (currentRole() !== 'laboran') return;
      const id = document.getElementById('lab-crud-id').value;
      const nameVal = document.getElementById('lab-crud-nama').value.trim();
      const payload = {
        kode: document.getElementById('lab-crud-kode').value.trim(),
        nama: nameVal,
        namaId: nameVal,
        kapasitas: Number(document.getElementById('lab-crud-kapasitas').value),
        spesifikasi: document.getElementById('lab-crud-spek').value.trim(),
        status: document.getElementById('lab-crud-status').value
      };
      if (id) {
        const target = state.labs.find((l) => l.id === Number(id));
        if (target) Object.assign(target, payload);
      } else {
        const nextId = state.labs.reduce((m, l) => Math.max(m, l.id), 0) + 1;
        state.labs.push({ id: nextId, ...payload });
      }
      saveState();
      populateSelects();
      closeModal('modal-lab-crud');
      renderLaboranPanels();
      showGlobalFeedback(isId() ? 'Master data ruang lab diperbarui.' : 'Lab room master data updated.');
    });

    document.getElementById('btn-add-jadwal').addEventListener('click', (e) => {
      populateSelects();
      document.getElementById('jadwal-crud-id').value = '';
      document.getElementById('form-jadwal-crud').reset();
      document.getElementById('jadwal-crud-mulai').value = '09:00';
      document.getElementById('jadwal-crud-selesai').value = '11:00';
      document.getElementById('jadwal-crud-error').hidden = true;
      document.getElementById('modal-jadwal-crud-title').textContent = isId() ? 'Tambah Jadwal Praktikum Rutin' : 'Add Routine Practicum Schedule';
      openModal('modal-jadwal-crud', e.currentTarget);
    });

    document.getElementById('crud-jadwal-tbody').addEventListener('click', (e) => {
      const editBtn = e.target.closest('[data-edit-jadwal]');
      if (editBtn) {
        populateSelects();
        const j = state.jadwalRutin.find((x) => x.id === Number(editBtn.dataset.editJadwal));
        if (!j) return;
        document.getElementById('jadwal-crud-id').value = String(j.id);
        document.getElementById('jadwal-crud-lab').value = String(j.lab_id);
        document.getElementById('jadwal-crud-hari').value = String(j.hari);
        document.getElementById('jadwal-crud-mulai').value = j.jam_mulai;
        document.getElementById('jadwal-crud-selesai').value = j.jam_selesai;
        document.getElementById('jadwal-crud-matkul').value = j.mata_kuliah;
        document.getElementById('jadwal-crud-kelas').value = j.kelas;
        document.getElementById('jadwal-crud-pengampu').value = j.pengampu;
        document.getElementById('jadwal-crud-error').hidden = true;
        document.getElementById('modal-jadwal-crud-title').textContent = isId() ? 'Edit Jadwal Praktikum Rutin' : 'Edit Routine Practicum Schedule';
        openModal('modal-jadwal-crud', editBtn);
        return;
      }
      const delBtn = e.target.closest('[data-delete-jadwal]');
      if (delBtn) {
        const id = Number(delBtn.dataset.deleteJadwal);
        const msg = isId() ? 'Hapus jadwal praktikum rutin ini?' : 'Delete this routine practicum schedule?';
        openConfirm(msg, () => {
          state.jadwalRutin = state.jadwalRutin.filter((j) => j.id !== id);
          saveState();
          renderLaboranPanels();
          showGlobalFeedback(isId() ? 'Jadwal praktikum dihapus.' : 'Practicum schedule deleted.', 'warn');
        }, delBtn);
      }
    });

    document.getElementById('form-jadwal-crud').addEventListener('submit', (e) => {
      e.preventDefault();
      if (currentRole() !== 'laboran') return;
      const id = document.getElementById('jadwal-crud-id').value;
      const lab_id = Number(document.getElementById('jadwal-crud-lab').value);
      const hari = Number(document.getElementById('jadwal-crud-hari').value);
      const jam_mulai = document.getElementById('jadwal-crud-mulai').value;
      const jam_selesai = document.getElementById('jadwal-crud-selesai').value;
      const errBox = document.getElementById('jadwal-crud-error');

      if (timeToMin(jam_selesai) <= timeToMin(jam_mulai)) {
        errBox.textContent = isId() ? 'Jam selesai harus lebih besar dari jam mulai.' : 'End time must be later than start time.';
        errBox.hidden = false;
        return;
      }
      const clash = state.jadwalRutin.find(
        (j) =>
          j.id !== Number(id || -1) &&
          j.lab_id === lab_id &&
          j.hari === hari &&
          isOverlap(jam_mulai, jam_selesai, j.jam_mulai, j.jam_selesai)
      );
      if (clash) {
        errBox.textContent = isId()
          ? `Jadwal bentrok dengan ${clash.mata_kuliah} (${clash.kelas}) pada hari yang sama.`
          : `Schedule conflicts with ${clash.mata_kuliah} (${clash.kelas}) on the same day.`;
        errBox.hidden = false;
        return;
      }

      const payload = {
        lab_id,
        hari,
        jam_mulai,
        jam_selesai,
        mata_kuliah: document.getElementById('jadwal-crud-matkul').value.trim(),
        kelas: document.getElementById('jadwal-crud-kelas').value.trim(),
        pengampu: document.getElementById('jadwal-crud-pengampu').value.trim()
      };
      if (id) {
        const target = state.jadwalRutin.find((j) => j.id === Number(id));
        if (target) Object.assign(target, payload);
      } else {
        const nextId = state.jadwalRutin.reduce((m, j) => Math.max(m, j.id), 100) + 1;
        state.jadwalRutin.push({ id: nextId, ...payload });
      }
      saveState();
      closeModal('modal-jadwal-crud');
      renderLaboranPanels();
      showGlobalFeedback(isId() ? 'Jadwal praktikum rutin berhasil disimpan.' : 'Routine practicum schedule saved.');
    });

    const verifLabEl = document.getElementById('admin-verif-lab-filter');
    if (verifLabEl) {
      verifLabEl.addEventListener('change', (e) => {
        state.verifLabFilter = e.target.value;
        saveState();
        renderLaboranPanels();
      });
    }
    const rekapPeriodEl = document.getElementById('rekap-period-filter');
    if (rekapPeriodEl) {
      rekapPeriodEl.addEventListener('change', (e) => {
        state.rekapPeriod = e.target.value;
        saveState();
        renderLaboranPanels();
      });
    }
    document.querySelectorAll('[data-metric-jump]').forEach((card) => {
      const jump = () => {
        const [tab, filter] = String(card.dataset.metricJump || '').split(':');
        if (!tab) return;
        state.activeLaboranTab = tab;
        if (tab === 'verifikasi' && filter) state.verifFilter = filter;
        saveState();
        renderLaboranPanels();
        if (currentUser()) {
          const payload = {
            isMahasiswa: false,
            isLaboran: true,
            myCount: 0,
            pendingCount: state.reservasis.filter((r) => r.status === 'pending').length
          };
          renderDrawerNav(payload);
          renderCloudflareSidebar(payload);
        }
      };
      card.addEventListener('click', jump);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          jump();
        }
      });
    });

    const addAdminBookBtn = document.getElementById('btn-admin-add-booking');
    if (addAdminBookBtn) {
      addAdminBookBtn.addEventListener('click', (e) => {
        populateSelects();
        document.getElementById('form-admin-booking').reset();
        document.getElementById('admin-book-tanggal').value = state.selectedDate || getWibNow().isoDate;
        document.getElementById('admin-book-mulai').value = '09:00';
        document.getElementById('admin-book-selesai').value = '11:00';
        document.getElementById('admin-book-peserta').value = '30';
        document.getElementById('admin-book-error').hidden = true;
        openModal('modal-admin-booking', e.currentTarget);
      });
    }
    const adminBookForm = document.getElementById('form-admin-booking');
    if (adminBookForm) {
      adminBookForm.addEventListener('input', () => {
        document.getElementById('admin-book-error').hidden = true;
      });
      adminBookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (currentRole() !== 'laboran') return;
        const labId = Number(document.getElementById('admin-book-lab').value);
        const tanggal = document.getElementById('admin-book-tanggal').value;
        const peserta = Number(document.getElementById('admin-book-peserta').value);
        const jamMulai = document.getElementById('admin-book-mulai').value;
        const jamSelesai = document.getElementById('admin-book-selesai').value;
        const holder = document.getElementById('admin-book-pemohon').value.trim();
        const purpose = document.getElementById('admin-book-keperluan').value.trim();
        const errBox = document.getElementById('admin-book-error');
        const check = checkReservationConflict({ labId, tanggal, jamMulai, jamSelesai, peserta });
        if (!check.ok || !holder || !purpose) {
          errBox.textContent = !check.ok ? check.reason : (isId() ? 'Penanggung jawab dan keperluan wajib diisi.' : 'PIC and purpose are required.');
          errBox.hidden = false;
          return;
        }
        const nextId = state.reservasis.reduce((m, r) => Math.max(m, r.id), 0) + 1;
        const code = `LS-2026-${String(100 + nextId).padStart(4, '0')}`;
        state.reservasis.unshift({
          id: nextId,
          kode_tiket: code,
          lab_id: labId,
          pemohon_nama: holder,
          pemohon_nim: currentUser()?.nim || 'ADMIN-FKI',
          tanggal,
          jam_mulai: jamMulai,
          jam_selesai: jamSelesai,
          peserta,
          keperluan: purpose,
          anggota: holder,
          status: 'approved',
          catatan_laboran: isId() ? 'Dibuat & disetujui langsung oleh Admin / Laboran.' : 'Created and directly approved by Admin / Staff.',
          created_at: new Date().toISOString()
        });
        saveState();
        closeModal('modal-admin-booking');
        updateHeaderAndCounts();
        renderLaboranPanels();
        showGlobalFeedback(isId() ? `Slot berhasil diblokir (${code}).` : `Direct booking approved (${code}).`);
      });
    }

    document.getElementById('btn-export-csv').addEventListener('click', () => {
      const period = state.rekapPeriod || 'all';
      const wibToday = getWibNow().isoDate;
      const inPeriod = (tanggal) => {
        if (period === 'week') return tanggal >= addDays(wibToday, -3) && tanggal <= addDays(wibToday, 4);
        if (period === 'month') return tanggal.slice(0, 7) === wibToday.slice(0, 7);
        return true;
      };
      const rows = [['Ticket Code', 'Lab', 'Date', 'Time', 'Applicant', 'NIM', 'Purpose', 'Status']];
      state.reservasis.filter((r) => inPeriod(r.tanggal)).forEach((r) => {
        const lab = state.labs.find((l) => l.id === r.lab_id);
        rows.push([
          r.kode_tiket,
          lab ? lab.kode : '',
          r.tanggal,
          `${r.jam_mulai}-${r.jam_selesai}`,
          r.pemohon_nama,
          r.pemohon_nim,
          r.keperluan,
          r.status
        ]);
      });
      const safeCsvCell = (v) => {
        const s = String(v ?? '');
        const safe = /^[=+\-@\t\r]/.test(s) ? `'${s}` : s;
        return `"${safe.replace(/"/g, '""')}"`;
      };
      const csv = rows.map((row) => row.map(safeCsvCell).join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `labspace-report-${period}-${toIsoDate(new Date())}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showGlobalFeedback(isId() ? 'Laporan CSV berhasil diunduh.' : 'CSV utilization report downloaded.');
    });

    const userSearchEl = document.getElementById('admin-user-search');
    if (userSearchEl) {
      userSearchEl.addEventListener('input', (e) => {
        state.userSearch = e.target.value;
        saveState();
        renderLaboranPanels();
      });
    }
    const clearUserSearchBtn = document.getElementById('btn-clear-user-search');
    if (clearUserSearchBtn) {
      clearUserSearchBtn.addEventListener('click', () => {
        state.userSearch = '';
        saveState();
        renderLaboranPanels();
        if (userSearchEl) userSearchEl.focus();
      });
    }
    const addUserBtn = document.getElementById('btn-add-user');
    if (addUserBtn) {
      addUserBtn.addEventListener('click', (e) => {
        document.getElementById('user-crud-id').value = '';
        document.getElementById('form-user-crud').reset();
        document.getElementById('user-crud-role').value = 'mahasiswa';
        document.getElementById('user-crud-password').required = true;
        document.getElementById('user-crud-error').hidden = true;
        document.getElementById('modal-user-crud-title').textContent = isId() ? 'Tambah Akun Pengguna' : 'Add User Account';
        openModal('modal-user-crud', e.currentTarget);
      });
    }
    const usersTbody = document.getElementById('crud-users-tbody');
    if (usersTbody) {
      usersTbody.addEventListener('click', (e) => {
        const editBtn = e.target.closest('[data-edit-user]');
        if (editBtn) {
          const u = state.users.find((x) => x.id === Number(editBtn.dataset.editUser));
          if (!u) return;
          document.getElementById('user-crud-id').value = String(u.id);
          document.getElementById('user-crud-name').value = u.name;
          document.getElementById('user-crud-nim').value = u.nim;
          document.getElementById('user-crud-email').value = u.email;
          document.getElementById('user-crud-role').value = u.role;
          document.getElementById('user-crud-password').value = '';
          document.getElementById('user-crud-password').required = false;
          document.getElementById('user-crud-error').hidden = true;
          document.getElementById('modal-user-crud-title').textContent = isId() ? `Edit Akun ${u.name}` : `Edit Account ${u.name}`;
          openModal('modal-user-crud', editBtn);
          return;
        }
        const roleBtn = e.target.closest('[data-toggle-user-role]');
        if (roleBtn) {
          const u = state.users.find((x) => x.id === Number(roleBtn.dataset.toggleUserRole));
          if (!u || u.id === currentUser()?.id) return;
          u.role = u.role === 'laboran' ? 'mahasiswa' : 'laboran';
          saveState();
          updateHeaderAndCounts();
          renderLaboranPanels();
          showGlobalFeedback(
            isId()
              ? `Peran ${u.name} diubah menjadi ${u.role === 'laboran' ? 'Admin / Laboran' : 'Mahasiswa'}.`
              : `${u.name} role updated to ${u.role === 'laboran' ? 'Admin / Lab Staff' : 'Student'}.`
          );
          return;
        }
        const delBtn = e.target.closest('[data-delete-user]');
        if (delBtn) {
          const id = Number(delBtn.dataset.deleteUser);
          const target = state.users.find((x) => x.id === id);
          if (!target || target.id === currentUser()?.id) return;
          const msg = isId()
            ? `Hapus akun ${target.name} (${target.nim}) beserta seluruh reservasi miliknya?`
            : `Delete account ${target.name} (${target.nim}) and all associated bookings?`;
          openConfirm(msg, () => {
            state.users = state.users.filter((x) => x.id !== id);
            state.reservasis = state.reservasis.filter((r) => r.pemohon_nim !== target.nim);
            saveState();
            updateHeaderAndCounts();
            renderLaboranPanels();
            showGlobalFeedback(isId() ? 'Akun pengguna dihapus.' : 'User account deleted.', 'warn');
          }, delBtn);
        }
      });
    }
    const userCrudForm = document.getElementById('form-user-crud');
    if (userCrudForm) {
      userCrudForm.addEventListener('input', () => {
        document.getElementById('user-crud-error').hidden = true;
      });
      userCrudForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (currentRole() !== 'laboran') return;
        const id = Number(document.getElementById('user-crud-id').value || 0);
        const name = document.getElementById('user-crud-name').value.trim();
        const nim = document.getElementById('user-crud-nim').value.trim().toUpperCase();
        const email = document.getElementById('user-crud-email').value.trim().toLowerCase();
        const role = document.getElementById('user-crud-role').value;
        const pass = document.getElementById('user-crud-password').value;
        const errBox = document.getElementById('user-crud-error');

        const dup = state.users.some(
          (u) => u.id !== id && (u.email.toLowerCase() === email || u.nim.toLowerCase() === nim.toLowerCase())
        );
        if (!name || !nim || !email || dup || (!id && pass.length < 6) || (id && pass && pass.length < 6)) {
          errBox.textContent = dup
            ? (isId() ? 'NIM atau email sudah dipakai akun lain.' : 'Student ID or email is already used by another account.')
            : (isId() ? 'Lengkapi data dengan kata sandi minimal 6 karakter.' : 'Complete all fields with a password of at least 6 characters.');
          errBox.hidden = false;
          return;
        }
        if (id) {
          const target = state.users.find((u) => u.id === id);
          if (target) {
            const oldNim = target.nim;
            target.name = name;
            target.nim = nim;
            target.email = email;
            if (target.id !== currentUser()?.id) target.role = role;
            if (pass) target.password = pass;
            if (oldNim !== nim) {
              state.reservasis.forEach((r) => {
                if (r.pemohon_nim === oldNim) {
                  r.pemohon_nim = nim;
                  r.pemohon_nama = name;
                }
              });
            }
          }
        } else {
          const nextId = state.users.reduce((m, u) => Math.max(m, u.id), 0) + 1;
          state.users.push({ id: nextId, name, nim, email, password: pass, role });
        }
        saveState();
        updateHeaderAndCounts();
        closeModal('modal-user-crud');
        renderLaboranPanels();
        showGlobalFeedback(isId() ? 'Data akun pengguna disimpan.' : 'User account saved.');
      });
    }

    const copyPermitBtn = document.getElementById('btn-copy-permit-code');
    if (copyPermitBtn) {
      copyPermitBtn.addEventListener('click', async () => {
        if (!activePermitCode) return;
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(activePermitCode);
          }
          showGlobalFeedback(
            isId() ? `Kode tiket ${activePermitCode} disalin.` : `Copied ticket code ${activePermitCode}.`
          );
        } catch (_) {
          showGlobalFeedback(activePermitCode);
        }
      });
    }

    document.getElementById('btn-print-permit').addEventListener('click', () => {
      const prevTitle = document.title;
      if (activePermitFileSlug) document.title = activePermitFileSlug;
      window.print();
      window.setTimeout(() => {
        document.title = prevTitle;
      }, 400);
    });

    document.getElementById('btn-confirm-ok').addEventListener('click', () => {
      const fn = confirmCallback;
      confirmCallback = null;
      closeModal('modal-confirm');
      if (fn) fn();
    });

    document.querySelectorAll('[data-close-modal]').forEach((btn) => {
      btn.addEventListener('click', () => closeModal(btn.dataset.closeModal));
    });

    document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeModal(backdrop.id);
      });
    });

    document.addEventListener('pointerdown', (e) => {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const target = e.target.closest('.btn, .support-fab, .cf-nav-item, .drawer-nav-item, .support-mode-btn, .support-prompt-chip, .chip-btn, .seg-btn, .stepper-btn, .icon-btn, .nav-tab, .subtab-btn, .slot-cell, .week-day-cell, .btn-ghost-pill, .mob-nav-btn, .auth-tab-btn, .mobile-menu-btn, .lang-btn');
      if (!target || target.disabled) return;
      target.classList.add('is-pressed');
      window.setTimeout(() => target.classList.remove('is-pressed'), 160);
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.25;
      const cx = e.clientX || rect.left + rect.width / 2;
      const cy = e.clientY || rect.top + rect.height / 2;
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple';
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${cx - rect.left - size / 2}px`;
      ripple.style.top = `${cy - rect.top - size / 2}px`;
      target.querySelectorAll('.btn-ripple').forEach((old) => old.remove());
      target.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 520);
    }, { passive: true });

    document.querySelectorAll('[data-support-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.supportMode = btn.dataset.supportMode || 'ai';
        saveState();
        renderSupportCenter();
      });
    });

    const askAiPrompt = (promptTxt) => {
      if (!promptTxt) return;
      const nowTime = `${getWibNow().hhmm} WIB`;
      state.aiMessages.push({
        role: 'user',
        sender: currentUser()?.name || (isId() ? 'Mahasiswa' : 'Student'),
        time: nowTime,
        text: promptTxt
      });
      saveState();
      renderSupportCenter({ typing: true });
      window.setTimeout(() => {
        const reply = buildAiSupportReply(promptTxt);
        state.aiMessages.push({
          role: 'bot',
          sender: 'LabSpace AI',
          time: `${getWibNow().hhmm} WIB`,
          text: reply.text,
          actions: reply.actions
        });
        saveState();
        renderSupportCenter();
      }, 240);
    };

    const aiPromptsBox = document.getElementById('ai-quick-prompts');
    if (aiPromptsBox) {
      aiPromptsBox.addEventListener('click', (e) => {
        const chip = e.target.closest('[data-ai-prompt]');
        if (!chip) return;
        askAiPrompt(chip.dataset.aiPrompt || '');
      });
    }

    const aiStreamEl = document.getElementById('ai-chat-stream');
    if (aiStreamEl) {
      aiStreamEl.addEventListener('click', (e) => {
        const actBtn = e.target.closest('.chat-action-btn');
        if (!actBtn) return;
        if (actBtn.dataset.aiMode) {
          state.supportMode = actBtn.dataset.aiMode;
          saveState();
          renderSupportCenter();
          return;
        }
        if (actBtn.dataset.aiAuth) {
          openAuthModal(actBtn.dataset.aiAuth, actBtn);
          return;
        }
        if (actBtn.dataset.aiNav) {
          if (actBtn.dataset.aiLab) {
            state.formDraft = { ...(state.formDraft || {}), labId: Number(actBtn.dataset.aiLab) };
          }
          switchView(actBtn.dataset.aiNav, actBtn);
        }
      });
    }

    const aiChatForm = document.getElementById('form-ai-chat');
    if (aiChatForm) {
      aiChatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inp = document.getElementById('ai-chat-input');
        const txt = inp.value.trim();
        if (!txt) return;
        inp.value = '';
        askAiPrompt(txt);
      });
    }

    const aiClearBtn = document.getElementById('btn-ai-clear');
    if (aiClearBtn) {
      aiClearBtn.addEventListener('click', () => {
        state.aiMessages = [];
        saveState();
        renderSupportCenter();
      });
    }

    const csChatForm = document.getElementById('form-cs-chat');
    if (csChatForm) {
      csChatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inp = document.getElementById('cs-chat-input');
        const topic = document.getElementById('cs-topic-select')?.value || 'schedule';
        const txt = inp.value.trim();
        if (!txt) return;
        const u = currentUser();
        const staffMode = currentRole() === 'laboran';
        const senderLabel = u ? (staffMode ? `Lab Staff CS (${u.name})` : `${u.name} (${u.nim})`) : (isId() ? 'Pengunjung' : 'Guest');
        const nowTime = `${getWibNow().hhmm} WIB`;
        state.csMessages.push({
          id: state.csMessages.reduce((m, x) => Math.max(m, x.id || 0), 0) + 1,
          role: staffMode ? 'cs' : 'student',
          sender: senderLabel,
          topic,
          time: nowTime,
          text: txt
        });
        inp.value = '';
        saveState();
        updateHeaderAndCounts();
        renderSupportCenter();
        showGlobalFeedback(
          staffMode
            ? (isId() ? 'Balasan CS dikirim ke mahasiswa.' : 'Support reply posted.')
            : (isId() ? 'Pesan terkirim ke CS / Laboran Gedung J.' : 'Message sent to Building J Lab Staff CS.')
        );
      });
    }

    const fabBtn = document.getElementById('btn-support-fab');
    const supportWidget = document.getElementById('support-widget');
    const closeSupportBtn = document.getElementById('btn-close-support');
    const openSupport = (open = true) => {
      if (!supportWidget || !fabBtn) return;
      supportWidget.hidden = !open;
      fabBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        renderSupportCenter();
        const inp = state.supportMode === 'cs'
          ? document.getElementById('cs-chat-input')
          : document.getElementById('ai-chat-input');
        if (inp) inp.focus();
      }
    };
    if (fabBtn) {
      fabBtn.addEventListener('click', () => {
        openSupport(supportWidget ? supportWidget.hidden : true);
      });
    }
    if (closeSupportBtn) {
      closeSupportBtn.addEventListener('click', () => {
        openSupport(false);
        if (fabBtn) fabBtn.focus();
      });
    }
    const landingOpenAiBtn = document.getElementById('btn-landing-open-ai');
    if (landingOpenAiBtn) {
      landingOpenAiBtn.addEventListener('click', () => {
        state.supportMode = 'ai';
        saveState();
        openSupport(true);
      });
    }
    const landingOpenCsBtn = document.getElementById('btn-landing-open-cs');
    if (landingOpenCsBtn) {
      landingOpenCsBtn.addEventListener('click', () => {
        state.supportMode = 'cs';
        saveState();
        openSupport(true);
      });
    }

    document.querySelectorAll('.faq-item').forEach((details) => {
      const summary = details.querySelector('summary');
      if (!summary) return;
      details.classList.toggle('is-expanded', details.open);
      summary.addEventListener('click', (e) => {
        e.preventDefault();
        if (details._faqAnim) {
          details._faqAnim.cancel();
          details._faqAnim = null;
        }
        const cs = window.getComputedStyle(details);
        const padY = parseFloat(cs.paddingTop || '0') + parseFloat(cs.paddingBottom || '0') + 2;
        const closedH = summary.offsetHeight + padY;

        if (details.open && !details.classList.contains('is-closing')) {
          const startH = `${details.offsetHeight}px`;
          const endH = `${closedH}px`;
          details.classList.add('is-closing');
          details.classList.remove('is-expanded');
          const anim = details.animate([{ height: startH }, { height: endH }], {
            duration: 280,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
          });
          details._faqAnim = anim;
          anim.onfinish = () => {
            details.open = false;
            details.classList.remove('is-closing');
            details.style.height = '';
            details._faqAnim = null;
          };
          anim.oncancel = () => {
            details.classList.remove('is-closing');
          };
        } else {
          const startH = `${details.offsetHeight}px`;
          details.open = true;
          details.classList.remove('is-closing');
          const endH = `${details.offsetHeight}px`;
          details.classList.remove('is-expanded');
          window.requestAnimationFrame(() => {
            details.classList.add('is-expanded');
          });
          const anim = details.animate([{ height: startH }, { height: endH }], {
            duration: 310,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
          });
          details._faqAnim = anim;
          anim.onfinish = () => {
            details.style.height = '';
            details._faqAnim = null;
          };
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        openSupport(false);
        document.querySelectorAll('.modal-backdrop.is-open').forEach((m) => closeModal(m.id));
        if (document.getElementById('mobile-drawer').classList.contains('is-open')) closeDrawer();
        const np = document.getElementById('notif-popover');
        if (np && !np.hidden) {
          np.hidden = true;
          document.getElementById('btn-notif').setAttribute('aria-expanded', 'false');
        }
        const up = document.getElementById('user-menu-popover');
        if (up && !up.hidden) {
          up.hidden = true;
          const ub = document.getElementById('btn-user-menu');
          if (ub) ub.setAttribute('aria-expanded', 'false');
        }
      }
    });

    window.addEventListener('popstate', () => {
      const nextView = viewFromPath(window.location.pathname);
      switchView(nextView, null, { syncHistory: false });
    });
  }

  function enhanceSelectChevrons() {
    const closeAllCustomSelects = (exceptWrap = null) => {
      document.querySelectorAll('.select-wrap.is-open').forEach((w) => {
        if (w === exceptWrap) return;
        w.classList.remove('is-open', 'dir-up', 'dir-down');
        const trig = w.querySelector('.ls-select-trigger');
        const menu = w.querySelector('.ls-select-menu');
        if (trig) trig.setAttribute('aria-expanded', 'false');
        if (menu) menu.hidden = true;
      });
    };

    document.querySelectorAll('select.select').forEach((sel) => {
      if (sel.closest('.select-wrap')) return;
      const wrap = document.createElement('span');
      wrap.className = sel.classList.contains('input-compact') ? 'select-wrap is-compact' : 'select-wrap';
      sel.parentNode.insertBefore(wrap, sel);
      wrap.appendChild(sel);
      sel.classList.add('is-enhanced');
      sel.tabIndex = -1;

      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'ls-select-trigger';
      trigger.setAttribute('aria-haspopup', 'listbox');
      trigger.setAttribute('aria-expanded', 'false');

      const labelSpan = document.createElement('span');
      labelSpan.className = 'ls-select-label';
      trigger.appendChild(labelSpan);

      const chev = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      chev.setAttribute('class', 'select-chevron');
      chev.setAttribute('width', '15');
      chev.setAttribute('height', '15');
      chev.setAttribute('viewBox', '0 0 24 24');
      chev.setAttribute('fill', 'none');
      chev.setAttribute('stroke', 'currentColor');
      chev.setAttribute('stroke-width', '2.2');
      chev.setAttribute('stroke-linecap', 'round');
      chev.setAttribute('stroke-linejoin', 'round');
      chev.setAttribute('aria-hidden', 'true');
      const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
      poly.setAttribute('points', '6 9 12 15 18 9');
      chev.appendChild(poly);
      trigger.appendChild(chev);

      const menu = document.createElement('div');
      menu.className = 'ls-select-menu';
      menu.setAttribute('role', 'listbox');
      menu.setAttribute('data-lenis-prevent', '');
      menu.hidden = true;

      wrap.appendChild(trigger);
      wrap.appendChild(menu);

      const syncTriggerAndMenu = () => {
        const opts = Array.from(sel.options || []);
        const selected = opts.find((o) => o.value === sel.value) || opts[0];
        labelSpan.textContent = selected ? selected.textContent : '';
        trigger.disabled = Boolean(sel.disabled);
        menu.innerHTML = '';
        opts.forEach((opt) => {
          const itemBtn = document.createElement('button');
          itemBtn.type = 'button';
          itemBtn.className = 'ls-select-option' + (opt.value === sel.value ? ' is-selected' : '');
          itemBtn.setAttribute('role', 'option');
          itemBtn.setAttribute('aria-selected', opt.value === sel.value ? 'true' : 'false');
          itemBtn.disabled = Boolean(opt.disabled);
          itemBtn.textContent = opt.textContent;
          itemBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (sel.value !== opt.value) {
              sel.value = opt.value;
              sel.dispatchEvent(new Event('change', { bubbles: true }));
            }
            syncTriggerAndMenu();
            closeAllCustomSelects();
            trigger.focus();
          });
          menu.appendChild(itemBtn);
        });
      };

      syncTriggerAndMenu();

      if (typeof MutationObserver === 'function') {
        const obs = new MutationObserver(() => syncTriggerAndMenu());
        obs.observe(sel, { childList: true, subtree: true, characterData: true, attributes: true });
      }
      sel.addEventListener('change', syncTriggerAndMenu);

      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const opening = !wrap.classList.contains('is-open');
        closeAllCustomSelects();
        if (!opening) return;
        syncTriggerAndMenu();
        const rect = typeof trigger.getBoundingClientRect === 'function' ? trigger.getBoundingClientRect() : { bottom: 0, top: 300 };
        const viewH = window.innerHeight || 768;
        const spaceBelow = viewH - rect.bottom;
        const spaceAbove = rect.top;
        const openUp = spaceBelow < 220 && spaceAbove > spaceBelow;
        wrap.classList.add('is-open', openUp ? 'dir-up' : 'dir-down');
        trigger.setAttribute('aria-expanded', 'true');
        menu.hidden = false;
        const activeOpt = menu.querySelector('.ls-select-option.is-selected');
        if (activeOpt && typeof activeOpt.offsetTop === 'number') {
          menu.scrollTop = Math.max(0, activeOpt.offsetTop - 40);
        }
      });
    });

    document.querySelectorAll('input[type="date"]').forEach((dateInp) => {
      dateInp.addEventListener('click', () => {
        if (typeof dateInp.showPicker === 'function') {
          try { dateInp.showPicker(); } catch (_) {}
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.select-wrap')) closeAllCustomSelects();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllCustomSelects();
    });
  }

  function init() {
    applyTheme(localStorage.getItem(THEME_KEY) || 'light');
    initSmoothScroll();
    enhanceSelectChevrons();
    wireEvents();
    applyI18n(false, { render: false });
    renderSupportCenter();

    const user = currentUser();
    const pathView = viewFromPath(window.location.pathname);
    let initialView = pathView;
    if (!user && (initialView === 'reservasi' || initialView === 'riwayat' || initialView === 'finder' || initialView === 'tickets')) {
      initialView = 'monitoring';
    } else if (user && user.role === 'laboran' && (initialView === 'reservasi' || initialView === 'riwayat' || initialView === 'finder' || initialView === 'tickets')) {
      initialView = 'laboran';
    }
    switchView(initialView, null, { syncHistory: false });
    if (!IS_FILE_PROTO && window.history && typeof window.history.replaceState === 'function') {
      const targetUrl = pathForView(state.activeView);
      if (window.location.pathname !== targetUrl) {
        try {
          window.history.replaceState({ view: state.activeView }, '', targetUrl);
        } catch {}
      }
    }

    window.setInterval(() => {
      updateLiveClocks();
      if (state.activeView === 'monitoring') renderMonitoring({ animate: false });
    }, 15000);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
