// FIGURE SKATING COACH LANDING PAGE — SCRIPTS

document.addEventListener('DOMContentLoaded', function () {

  // ========== MODAL ==========
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const openModalBtns = document.querySelectorAll('[data-modal-open]');

  function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // ========== LANGUAGE DROPDOWN ==========
  const langDropdown = document.getElementById('langDropdown');
  const langCurrent = document.getElementById('langCurrent');
  const langLinks = document.querySelectorAll('.lang-list a');

  if (langCurrent && langDropdown) {
    langCurrent.addEventListener('click', function (e) {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });
  }

  langLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const lang = this.dataset.lang;
      langLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      langDropdown.querySelector('.lang-current span').textContent = lang.toUpperCase();
      langDropdown.classList.remove('open');
      if (lang === 'en' || lang === 'ru' || lang === 'zh' || lang === 'th') {
        currentLang = lang;
        localStorage.setItem('coachLang', currentLang);
        applyContent();
      }
    });
  });

  document.addEventListener('click', function () {
    if (langDropdown) langDropdown.classList.remove('open');
  });

  // ========== SITE TOGGLE ==========
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  let currentLang = localStorage.getItem('coachLang') || 'ru';
  let currentMode = 'pro';

  const menuText = {
    ru: { trainer: 'Тренер', skating: 'Лёд', ofp: 'ОФП', sfp: 'СФП', online: 'Online', contacts: 'Контакты', 'video-title': 'Видео прыжков', 'video-4s': '4S (четверной сальхов)', 'video-3lz': '3Lz (тройной лутц)' },
    en: { trainer: 'Coach', skating: 'Ice', ofp: 'GPP', sfp: 'SPP', online: 'Online', contacts: 'Contacts', 'video-title': 'Jump Videos', 'video-4s': '4S (quadruple Salchow)', 'video-3lz': '3Lz (triple Lutz)' },
    zh: { trainer: '教练', skating: '冰', ofp: '体能', sfp: '专项', online: '在线', contacts: '联系', 'video-title': '跳跃视频', 'video-4s': '4S (后内结环四周跳)', 'video-3lz': '3Lz (勾手三周跳)' },
    th: { trainer: 'โค้ช', skating: 'น้ำแข็ง', ofp: 'GPP', sfp: 'SPP', online: 'Online', contacts: 'ติดต่อ', 'video-title': 'วิดีโอการกระโดด', 'video-4s': '4S (Salchow สี่รอบ)', 'video-3lz': '3Lz (Lutz สามรอบ)' }
  };

  const content = {
    ru: {
      pro: {
        'trainer-name': 'Третьяков Иван Павлович',
        'skate-title': 'Скольжение и вращения',
        'jump-title': 'Прыжковые элементы',
        'ofp-title': 'ОФП',
        'sfp-title': 'СФП',
        'online-title': 'Online',
        'contacts-title': 'Связаться со мной',
        'contacts-desc': 'Напишите мне сообщение, и я свяжусь с вами для обсуждения тренировок.',
        'toggle-pro': 'Спортсменам',
        'toggle-amateur': 'Любителям',
        'header-btn': 'Оставить заявку',
        'contacts-submit': 'Отправить сообщение',
        'contacts-consent': 'Согласие на обработку персональных данных',
        'contacts-callout': 'Или оставьте заявку, и я свяжусь с вами сам',
        'contacts-btn': 'Оставить заявку',
        'modal-title': 'Оставить заявку',
        'modal-name': 'Имя',
        'modal-phone': 'Телефон',
        'modal-email': 'Email',
        'modal-consent': 'Согласие на обработку персональных данных',
        'modal-submit': 'Отправить заявку',
        'video-link': 'Смотреть видео прыжков',
        'hero-title': 'Тренер по фигурному катанию',
        'hero-sub': 'Индивидуальные занятия и мини‑группы для спортсменов разных возрастов',
        'trainer-text': 'Мастер спорта международного класса, неоднократный победитель Финала Кубка России, участник и призёр международных турниров ISU. В настоящее время тренер в спортивной школе, практик на коньках, специалист в технике элементов фигурного катания.',
        'list-1': 'Тренер с опытом работы более 15 лет',
        'list-2': 'Отличие по специальности «Тренер-педагог»',
        'list-3': 'Призёр международных соревнований ISU',
        'list-4': 'Воспитанник ЦСКА под руководством Селицкой М.Л.',
        'skate-1': 'Первые шаги на льду и сложные связки, использование которых повысит мастерство катания',
        'skate-2': 'Изучение сложно-координационных, а также базовых вращений для выполнения разрядов',
        'skate-3': 'Подготовка к выполнению юношеских и спортивных тестов',
        'skate-4': 'Исправление уже заученных ошибок в катании и исполнении элементов',
        'jump-1': 'Подготовка и наработка необходимых умений для успешного владения прыжками',
        'jump-2': 'Освоение техники, позволяющей в дальнейшем исключить ошибки в многооборотных прыжках',
        'ofp-1': 'Индивидуальная программа по ОФП на подкачку определённых мышц и других характеристик спортсмена под каждую задачу и цель.',
        'ofp-2': 'Групповые тренировки проходят в специализированном легкоатлетическом манеже.',
        'sfp-1': 'Индивидуальная программа по специальной физической подготовке на развитие взрывной силы, координации и устойчивости, необходимых для стабильного выполнения многооборотных прыжков и сложных вращений.',
        'sfp-2': 'Работаем с различным спортивным инвентарём — от платформ до эспандеров.',
        'online-1': 'Индивидуальные онлайн-занятия с детальным разбором ваших видео, корректировкой техники и составлением домашних планов ОФП/СФП под ваши задачи.',
        'online-2': 'Работаем в удобном формате с обратной связью по видео и текстовыми комментариями.',
        img: { hero: 'hero.png', ofp: 'ofp.png', sfp: 'sfp.png', online: 'online.png' }
      },
      amateur: {
        'trainer-name': 'Третьяков Иван Павлович',
        'skate-title': 'Скольжение и вращения',
        'jump-title': 'Прыжковые элементы',
        'ofp-title': 'ОФП',
        'sfp-title': 'СФП',
        'online-title': 'Online',
        'contacts-title': 'Связаться со мной',
        'contacts-desc': 'Напишите мне сообщение, и я свяжусь с вами для обсуждения тренировок.',
        'toggle-pro': 'Спортсменам',
        'toggle-amateur': 'Любителям',
        'header-btn': 'Оставить заявку',
        'contacts-submit': 'Отправить сообщение',
        'contacts-consent': 'Согласие на обработку персональных данных',
        'contacts-callout': 'Или оставьте заявку, и я свяжусь с вами сам',
        'contacts-btn': 'Оставить заявку',
        'modal-title': 'Оставить заявку',
        'modal-name': 'Имя',
        'modal-phone': 'Телефон',
        'modal-email': 'Email',
        'modal-consent': 'Согласие на обработку персональных данных',
        'modal-submit': 'Отправить заявку',
        'video-link': 'Смотреть видео прыжков',
        'hero-title': 'Тренер по фигурному катанию',
        'hero-sub': 'Индивидуальные занятия для любителей любого возраста и уровня подготовки',
        'trainer-text': 'Мастер спорта международного класса, неоднократный победитель Финала Кубка России, участник и призёр международных турниров ISU. Опытный тренер, который поможет сделать первые шаги на льду и добиться уверенного катания взрослым и детям.',
        'list-1': 'Тренер с опытом работы более 15 лет',
        'list-2': 'Отличие по специальности «Тренер-педагог»',
        'list-3': 'Призёр международных соревнований ISU',
        'list-4': 'Воспитанник ЦСКА под руководством Селицкой М.Л.',
        'skate-1': 'Постановка правильной техники катания с нуля для взрослых и детей',
        'skate-2': 'Освоение базовых и продвинутых вращений, поворотов и шагов',
        'skate-3': 'Уверенное катание на коньках, развитие координации и чувства льда',
        'skate-4': 'Исправление типичных ошибок в технике для комфортного и красивого катания',
        'jump-1': 'Подготовка к прыжковым элементам через специальные подводящие упражнения',
        'jump-2': 'Освоение базовых прыжков с учётом вашего уровня и физической подготовки',
        'ofp-1': 'Индивидуальная программа общей физической подготовки для укрепления мышц, развития гибкости и выносливости.',
        'ofp-2': 'Занятия проходят в комфортном формате с учётом вашего текущего уровня физической формы.',
        'sfp-1': 'Специальная физическая подготовка для улучшения координации, чувства равновесия и грации, необходимых для красивого катания.',
        'sfp-2': 'Используем различный инвентарь для разнообразных и эффективных тренировок.',
        'online-1': 'Индивидуальные онлайн-консультации с разбором ваших видео, рекомендациями по технике и программой домашних тренировок.',
        'online-2': 'Обратная связь по видео и текстовые рекомендации в удобное для вас время.',
        img: { hero: 'hero-2.png', ofp: 'ofp-2.png', sfp: 'sfp-2.png', online: 'online-2.png' }
      }
    },
    en: {
      pro: {
        'trainer-name': 'Tretyakov Ivan Pavlovich',
        'skate-title': 'Skating and Spins',
        'jump-title': 'Jump Elements',
        'ofp-title': 'GPP',
        'sfp-title': 'SPP',
        'online-title': 'Online',
        'contacts-title': 'Contact Me',
        'contacts-desc': 'Send me a message and I will contact you to discuss training.',
        'toggle-pro': 'Athletes',
        'toggle-amateur': 'Amateurs',
        'header-btn': 'Leave a Request',
        'contacts-submit': 'Send Message',
        'contacts-consent': 'Consent to personal data processing',
        'contacts-callout': 'Or leave a request and I will contact you',
        'contacts-btn': 'Leave a Request',
        'modal-title': 'Leave a Request',
        'modal-name': 'Name',
        'modal-phone': 'Phone',
        'modal-email': 'Email',
        'modal-consent': 'Consent to personal data processing',
        'modal-submit': 'Submit Request',
        'video-link': 'Watch jump videos',
        'hero-title': 'Figure Skating Coach',
        'hero-sub': 'Private lessons and mini-groups for athletes of all ages and skill levels',
        'trainer-text': 'Master of Sports of International Class, multiple winner of the Russian Cup Final, participant and medalist of international ISU competitions. Currently coaching at a sports school, practicing on skates, specializing in figure skating element technique.',
        'list-1': 'Over 15 years of coaching experience',
        'list-2': 'Degree in Coach-Teacher specialty',
        'list-3': 'Medalist of international ISU competitions',
        'list-4': 'Trained at CSKA under Selitskaya M.L.',
        'skate-1': 'First steps on ice and complex sequences to improve your skating mastery',
        'skate-2': 'Learning coordination-intensive and basic spins for competitive requirements',
        'skate-3': 'Preparation for junior and sports classification tests',
        'skate-4': 'Correcting learned mistakes in skating and element execution',
        'jump-1': 'Preparation and development of skills needed for successful jump mastery',
        'jump-2': 'Learning technique that prevents errors in multi-rotation jumps',
        'ofp-1': 'Individual general physical training program targeting specific muscle groups and athlete characteristics for each goal.',
        'ofp-2': 'Group sessions take place in a specialized indoor athletic facility.',
        'sfp-1': 'Individual special physical training program for explosive strength, coordination and stability needed for multi-rotation jumps and complex spins.',
        'sfp-2': 'We work with various sports equipment — from platforms to resistance bands.',
        'online-1': 'Individual online sessions with detailed video analysis, technique correction and personalized OFP/SFP home plans.',
        'online-2': 'Convenient format with video feedback and text commentary.',
        img: { hero: 'hero.png', ofp: 'ofp.png', sfp: 'sfp.png', online: 'online.png' }
      },
      amateur: {
        'trainer-name': 'Tretyakov Ivan Pavlovich',
        'skate-title': 'Skating and Spins',
        'jump-title': 'Jump Elements',
        'ofp-title': 'GPP',
        'sfp-title': 'SPP',
        'online-title': 'Online',
        'contacts-title': 'Contact Me',
        'contacts-desc': 'Send me a message and I will discuss training with you.',
        'toggle-pro': 'Athletes',
        'toggle-amateur': 'Amateurs',
        'header-btn': 'Leave a Request',
        'contacts-submit': 'Send Message',
        'contacts-consent': 'Consent to personal data processing',
        'contacts-callout': 'Or leave a request and I will contact you',
        'contacts-btn': 'Leave a Request',
        'modal-title': 'Leave a Request',
        'modal-name': 'Name',
        'modal-phone': 'Phone',
        'modal-email': 'Email',
        'modal-consent': 'Consent to personal data processing',
        'modal-submit': 'Submit Request',
        'video-link': 'Watch jump videos',
        'hero-title': 'Figure Skating Coach',
        'hero-sub': 'Private lessons for amateurs of any age and fitness level',
        'trainer-text': 'Master of Sports of International Class, multiple winner of the Russian Cup Final, participant and medalist of international ISU competitions. An experienced coach who will help both adults and children take their first steps on ice and achieve confident skating.',
        'list-1': 'Over 15 years of coaching experience',
        'list-2': 'Degree in Coach-Teacher specialty',
        'list-3': 'Medalist of international ISU competitions',
        'list-4': 'Trained at CSKA under Selitskaya M.L.',
        'skate-1': 'Building proper skating technique from scratch for adults and children',
        'skate-2': 'Learning basic and advanced spins, turns and footwork sequences',
        'skate-3': 'Confident skating on ice, developing coordination and ice feel',
        'skate-4': 'Correcting common technique mistakes for comfortable and beautiful skating',
        'jump-1': 'Preparation for jumping elements through specialized lead-in exercises',
        'jump-2': 'Learning basic jumps tailored to your current level and physical fitness',
        'ofp-1': 'Individual general fitness program for strengthening muscles, developing flexibility and endurance.',
        'ofp-2': 'Sessions in a comfortable format matched to your current fitness level.',
        'sfp-1': 'Special physical training for improving coordination, balance and grace needed for beautiful skating.',
        'sfp-2': 'We use various equipment for diverse and effective workouts.',
        'online-1': 'Individual online consultations with video analysis, technique tips and a home training program.',
        'online-2': 'Video feedback and text recommendations at your convenience.',
        img: { hero: 'hero-2.png', ofp: 'ofp-2.png', sfp: 'sfp-2.png', online: 'online-2.png' }
      }
    },
    zh: {
      pro: {
        'trainer-name': '特列季亚科夫·伊万·巴甫洛维奇',
        'skate-title': '滑行与旋转',
        'jump-title': '跳跃动作',
        'ofp-title': '一般体能训练',
        'sfp-title': '专项体能训练',
        'online-title': '在线课程',
        'contacts-title': '联系我',
        'contacts-desc': '请给我留言，我将与您联系讨论训练事宜。',
        'toggle-pro': '运动员',
        'toggle-amateur': '爱好者',
        'header-btn': '提交申请',
        'contacts-submit': '发送消息',
        'contacts-consent': '同意处理个人数据',
        'contacts-callout': '或留下申请，我会亲自与您联系',
        'contacts-btn': '提交申请',
        'modal-title': '提交申请',
        'modal-name': '姓名',
        'modal-phone': '电话',
        'modal-email': '邮箱',
        'modal-consent': '同意处理个人数据',
        'modal-submit': '发送申请',
        'video-link': '观看跳跃视频',
        'hero-title': '花样滑冰教练',
        'hero-sub': '为不同年龄运动员提供个性化训练和小班课程',
        'trainer-text': '国际级运动健将，多次获得俄罗斯杯总决赛冠军，国际ISU赛事参赛者及奖牌获得者。现任体育学校教练，冰上实践者，花样滑冰技术专家。',
        'list-1': '超过15年的教练经验',
        'list-2': '毕业于"教练-教师"专业',
        'list-3': '国际ISU比赛获奖者',
        'list-4': '在CSKA接受塞利茨卡娅指导训练',
        'skate-1': '冰上第一步及复杂连接步法，提高滑行技巧',
        'skate-2': '学习复杂协调性旋转及基础旋转，达到等级标准',
        'skate-3': '为青少年及体育测试做准备',
        'skate-4': '纠正已形成的滑行和动作错误',
        'jump-1': '培养成功掌握跳跃所需技能',
        'jump-2': '学习技术以避免多周跳中的错误',
        'ofp-1': '针对每位运动员的目标，制定个性化体能训练计划，增强特定肌肉群和其他能力。',
        'ofp-2': '小组训练在专业田径馆内进行。',
        'sfp-1': '针对爆发力、协调性和稳定性的个性化专项体能训练，为稳定完成多周跳和复杂旋转打下基础。',
        'sfp-2': '使用多种训练器材——从平台到弹力带。',
        'online-1': '在线一对一课程，详细分析您的视频，纠正技术动作，制定个性化训练计划。',
        'online-2': '以视频反馈和文字评论的便捷形式进行。',
        img: { hero: 'hero.png', ofp: 'ofp.png', sfp: 'sfp.png', online: 'online.png' }
      },
      amateur: {
        'trainer-name': '特列季亚科夫·伊万·巴甫洛维奇',
        'skate-title': '滑行与旋转',
        'jump-title': '跳跃动作',
        'ofp-title': '一般体能训练',
        'sfp-title': '专项体能训练',
        'online-title': '在线课程',
        'contacts-title': '联系我',
        'contacts-desc': '请给我留言，我将与您联系讨论训练事宜。',
        'toggle-pro': '运动员',
        'toggle-amateur': '爱好者',
        'header-btn': '提交申请',
        'contacts-submit': '发送消息',
        'contacts-consent': '同意处理个人数据',
        'contacts-callout': '或留下申请，我会亲自与您联系',
        'contacts-btn': '提交申请',
        'modal-title': '提交申请',
        'modal-name': '姓名',
        'modal-phone': '电话',
        'modal-email': '邮箱',
        'modal-consent': '同意处理个人数据',
        'modal-submit': '发送申请',
        'video-link': '观看跳跃视频',
        'hero-title': '花样滑冰教练',
        'hero-sub': '为各年龄和水平的爱好者提供个性化课程',
        'trainer-text': '国际级运动健将，多次获得俄罗斯杯总决赛冠军，国际ISU赛事参赛者及奖牌获得者。经验丰富的教练，将帮助成人和儿童迈出冰上第一步，实现自信滑行。',
        'list-1': '超过15年的教练经验',
        'list-2': '毕业于"教练-教师"专业',
        'list-3': '国际ISU比赛获奖者',
        'list-4': '在CSKA接受塞利茨卡娅指导训练',
        'skate-1': '为零基础的成人和儿童建立正确滑行技术',
        'skate-2': '学习基础及进阶旋转、转体和步法',
        'skate-3': '自信冰上滑行，发展协调性和冰感',
        'skate-4': '纠正常见技术错误，实现舒适优美的滑行',
        'jump-1': '通过专项引导练习为跳跃动作做准备',
        'jump-2': '根据您的水平和体能学习基础跳跃',
        'ofp-1': '个性化体能训练计划，增强肌肉、提高柔韧性和耐力。',
        'ofp-2': '根据您当前体能水平以舒适的形式进行训练。',
        'sfp-1': '专项体能训练，提高协调性、平衡感和优雅度，实现优美滑行。',
        'sfp-2': '使用多种器材进行多样有效的训练。',
        'online-1': '在线一对一咨询，分析视频，提供技术建议和家庭训练计划。',
        'online-2': '在您方便的时间提供视频反馈和文字建议。',
        img: { hero: 'hero-2.png', ofp: 'ofp-2.png', sfp: 'sfp-2.png', online: 'online-2.png' }
      }
    },
    th: {
      pro: {
        'trainer-name': 'Tretyakov Ivan Pavlovich',
        'skate-title': 'การเล่นสเก็ตและการหมุน',
        'jump-title': 'การกระโดด',
        'ofp-title': 'GPP',
        'sfp-title': 'SPP',
        'online-title': 'Online',
        'contacts-title': 'ติดต่อฉัน',
        'contacts-desc': 'ส่งข้อความถึงฉัน แล้วฉันจะติดต่อคุณเพื่อหารือเกี่ยวกับการฝึกซ้อม',
        'toggle-pro': 'นักกีฬา',
        'toggle-amateur': 'มือสมัครเล่น',
        'header-btn': 'ส่งคำขอ',
        'contacts-submit': 'ส่งข้อความ',
        'contacts-consent': 'ยินยอมให้ประมวลผลข้อมูลส่วนบุคคล',
        'contacts-callout': 'หรือส่งคำขอ แล้วฉันจะติดต่อคุณเอง',
        'contacts-btn': 'ส่งคำขอ',
        'modal-title': 'ส่งคำขอ',
        'modal-name': 'ชื่อ',
        'modal-phone': 'โทรศัพท์',
        'modal-email': 'อีเมล',
        'modal-consent': 'ยินยอมให้ประมวลผลข้อมูลส่วนบุคคล',
        'modal-submit': 'ส่งคำขอ',
        'video-link': 'ดูวิดีโอการกระโดด',
        'hero-title': 'โค้ชสเก็ตลีลา',
        'hero-sub': 'บทเรียนส่วนตัวและกลุ่มย่อยสำหรับนักกีฬาทุกวัย',
        'trainer-text': 'มาสเตอร์ด้านกีฬาระดับนานาชาติ ผู้ชนะเลิศการแข่งขัน Russian Cup Final ผู้เข้าร่วมและผู้ได้รับรางวัลจากการแข่งขัน ISU ปัจจุบันเป็นโค้ชที่โรงเรียนกีฬา ผู้เชี่ยวชาญด้านเทคนิคสเก็ตลีลา',
        'list-1': 'ประสบการณ์การเป็นโค้ชมากกว่า 15 ปี',
        'list-2': 'วุฒิการศึกษาพิเศษ "โค้ช-ครู"',
        'list-3': 'ผู้ได้รับรางวัลจากการแข่งขัน ISU ระดับนานาชาติ',
        'list-4': 'ศิษย์เก่า CSKA ภายใต้การดูแลของ Selitskaya M.L.',
        'skate-1': 'ก้าวแรกบนน้ำแข็งและท่าผูกพันที่ซับซ้อนเพื่อเพิ่มทักษะการเล่นสเก็ต',
        'skate-2': 'การเรียนรู้การหมุนที่ต้องใช้การประสานงานสูงและการหมุนพื้นฐานเพื่อให้ได้ระดับ',
        'skate-3': 'การเตรียมตัวสำหรับการทดสอบเยาวชนและกีฬา',
        'skate-4': 'การแก้ไขข้อผิดพลาดที่เรียนรู้แล้วในการเล่นสเก็ตและการแสดงท่า',
        'jump-1': 'การเตรียมและพัฒนาทักษะที่จำเป็นสำหรับการกระโดดที่ประสบความสำเร็จ',
        'jump-2': 'การเรียนรู้เทคนิคที่ช่วยป้องกันข้อผิดพลาดในการกระโดดหลายรอบ',
        'ofp-1': 'โปรแกรมการฝึกกายภาพส่วนบุคคลเพื่อเสริมสร้างกล้ามเนื้อเฉพาะและคุณลักษณะอื่นๆ ตามเป้าหมายของนักกีฬา',
        'ofp-2': 'การฝึกกลุ่มจัดขึ้นในสนามกีฬากรีฑาเฉพาะทาง',
        'sfp-1': 'โปรแกรมการฝึกกายภาพพิเศษส่วนบุคคลเพื่อพัฒนาความแข็งแรงระเบิด การประสานงาน และความมั่นคงที่จำเป็นสำหรับการกระโดดหลายรอบและการหมุนที่ซับซ้อน',
        'sfp-2': 'เราใช้อุปกรณ์กีฬาหลากหลายตั้งแต่แท่นไปจนถึงยางยืดออกกำลังกาย',
        'online-1': 'บทเรียนออนไลน์ส่วนบุคคลพร้อมการวิเคราะห์วิดีโออย่างละเอียด การแก้ไขเทคนิค และแผนการฝึกที่บ้าน',
        'online-2': 'รูปแบบที่สะดวกพร้อมการตอบกลับทางวิดีโอและความคิดเห็นเป็นข้อความ',
        img: { hero: 'hero.png', ofp: 'ofp.png', sfp: 'sfp.png', online: 'online.png' }
      },
      amateur: {
        'trainer-name': 'Tretyakov Ivan Pavlovich',
        'skate-title': 'การเล่นสเก็ตและการหมุน',
        'jump-title': 'การกระโดด',
        'ofp-title': 'GPP',
        'sfp-title': 'SPP',
        'online-title': 'Online',
        'contacts-title': 'ติดต่อฉัน',
        'contacts-desc': 'ส่งข้อความถึงฉัน แล้วฉันจะติดต่อคุณเพื่อหารือเกี่ยวกับการฝึกซ้อม',
        'toggle-pro': 'นักกีฬา',
        'toggle-amateur': 'มือสมัครเล่น',
        'header-btn': 'ส่งคำขอ',
        'contacts-submit': 'ส่งข้อความ',
        'contacts-consent': 'ยินยอมให้ประมวลผลข้อมูลส่วนบุคคล',
        'contacts-callout': 'หรือส่งคำขอ แล้วฉันจะติดต่อคุณเอง',
        'contacts-btn': 'ส่งคำขอ',
        'modal-title': 'ส่งคำขอ',
        'modal-name': 'ชื่อ',
        'modal-phone': 'โทรศัพท์',
        'modal-email': 'อีเมล',
        'modal-consent': 'ยินยอมให้ประมวลผลข้อมูลส่วนบุคคล',
        'modal-submit': 'ส่งคำขอ',
        'video-link': 'ดูวิดีโอการกระโดด',
        'hero-title': 'โค้ชสเก็ตลีลา',
        'hero-sub': 'บทเรียนส่วนบุคคลสำหรับมือสมัครเล่นทุกวัยและทุกระดับ',
        'trainer-text': 'มาสเตอร์ด้านกีฬาระดับนานาชาติ ผู้ชนะเลิศการแข่งขัน Russian Cup Final ผู้เข้าร่วมและผู้ได้รับรางวัลจากการแข่งขัน ISU โค้ชผู้มีประสบการณ์ที่จะช่วยให้ทั้งผู้ใหญ่และเด็กก้าวแรกบนน้ำแข็งและเล่นสเก็ตได้อย่างมั่นใจ',
        'list-1': 'ประสบการณ์การเป็นโค้ชมากกว่า 15 ปี',
        'list-2': 'วุฒิการศึกษาพิเศษ "โค้ช-ครู"',
        'list-3': 'ผู้ได้รับรางวัลจากการแข่งขัน ISU ระดับนานาชาติ',
        'list-4': 'ศิษย์เก่า CSKA ภายใต้การดูแลของ Selitskaya M.L.',
        'skate-1': 'การสร้างเทคนิคการเล่นสเก็ตที่ถูกต้องตั้งแต่เริ่มต้นสำหรับผู้ใหญ่และเด็ก',
        'skate-2': 'การเรียนรู้การหมุนพื้นฐานและขั้นสูง การกลับตัวและการก้าวเท้า',
        'skate-3': 'การเล่นสเก็ตบนน้ำแข็งอย่างมั่นใจ พัฒนาการประสานงานและความรู้สึกกับน้ำแข็ง',
        'skate-4': 'การแก้ไขข้อผิดพลาดทางเทคนิคทั่วไปเพื่อการเล่นสเก็ตที่สบายและสวยงาม',
        'jump-1': 'การเตรียมพร้อมสำหรับการกระโดดผ่านแบบฝึกหัดนำทางพิเศษ',
        'jump-2': 'การเรียนรู้การกระโดดพื้นฐานตามระดับและความพร้อมทางกายภาพของคุณ',
        'ofp-1': 'โปรแกรมการฝึกกายภาพส่วนบุคคลเพื่อเสริมสร้างกล้ามเนื้อ พัฒนาความยืดหยุ่นและความอดทน',
        'ofp-2': 'การฝึกในรูปแบบที่สะดวกสบายตามระดับความฟิตปัจจุบันของคุณ',
        'sfp-1': 'การฝึกกายภาพพิเศษเพื่อพัฒนาการประสานงาน การทรงตัว และความสง่างามที่จำเป็นสำหรับการเล่นสเก็ตที่สวยงาม',
        'sfp-2': 'เราใช้อุปกรณ์หลากหลายเพื่อการออกกำลังกายที่หลากหลายและมีประสิทธิภาพ',
        'online-1': 'การปรึกษาออนไลน์ส่วนบุคคลพร้อมการวิเคราะห์วิดีโอ คำแนะนำเทคนิค และโปรแกรมการฝึกที่บ้าน',
        'online-2': 'การตอบกลับทางวิดีโอและคำแนะนำเป็นข้อความในเวลาที่คุณสะดวก',
        img: { hero: 'hero-2.png', ofp: 'ofp-2.png', sfp: 'sfp-2.png', online: 'online-2.png' }
      }
    }
  };

  function applyContent() {
    const data = content[currentLang][currentMode];
    document.querySelector('.hero-text h1').textContent = data['hero-title'];
    document.querySelector('.hero-text h2').textContent = data['hero-sub'];
    document.querySelector('.trainer-content h2').textContent = data['trainer-name'];
    document.querySelector('.trainer-content p').textContent = data['trainer-text'];
    document.querySelector('.skating-col:last-child h2').textContent = data['skate-title'];
    document.querySelectorAll('.skating-content')[1].querySelector('.skating-col:first-child h2').textContent = data['jump-title'];
    document.querySelector('#ofp .ofp-content h2').textContent = data['ofp-title'];
    document.querySelector('#sfp .sfp-content h2').textContent = data['sfp-title'];
    document.querySelector('#online .online-content h2').textContent = data['online-title'];
    document.querySelector('.contacts-single h2').textContent = data['contacts-title'];
    document.querySelector('.contacts-desc').textContent = data['contacts-desc'];

    const listItems = document.querySelectorAll('.trainer-list li span');
    if (listItems.length >= 4) {
      listItems[0].textContent = data['list-1'];
      listItems[1].textContent = data['list-2'];
      listItems[2].textContent = data['list-3'];
      listItems[3].textContent = data['list-4'];
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const menuKey = key.replace('menu-', '');
      if (menuText[currentLang] && menuText[currentLang][menuKey]) {
        el.textContent = menuText[currentLang][menuKey];
        return;
      }
      if (!data[key]) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = data[key];
      } else if (key === 'contacts-consent' || key === 'modal-consent') {
        const ct = currentLang === 'ru' ? 'персональных данных' : currentLang === 'zh' ? '个人数据' : currentLang === 'th' ? 'ข้อมูลส่วนบุคคล' : 'personal data';
        el.innerHTML = data[key] + ' <a href="privacy.html" target="_blank">' + ct + '</a>';
      } else {
        el.textContent = data[key];
      }
    });

    document.querySelectorAll('[data-i18n="contacts-consent"],[data-i18n="modal-consent"]').forEach(el => {
      const links = el.querySelectorAll('a');
      const pMap = { en: 'privacy-en.html', zh: 'privacy-zh.html', th: 'privacy-th.html' };
      links.forEach(a => { a.href = pMap[currentLang] || 'privacy.html'; });
    });

    const skateItems = document.querySelectorAll('.skating-section .skating-list li');
    if (skateItems.length >= 6) {
      skateItems[0].innerHTML = '<span>' + data['skate-1'] + '</span>';
      skateItems[1].innerHTML = '<span>' + data['skate-2'] + '</span>';
      skateItems[2].innerHTML = '<span>' + data['skate-3'] + '</span>';
      skateItems[3].innerHTML = '<span>' + data['skate-4'] + '</span>';
      skateItems[4].innerHTML = '<span>' + data['jump-1'] + '</span>';
      skateItems[5].innerHTML = '<span>' + data['jump-2'] + '</span>';
    }

    const ofpPs = document.querySelectorAll('#ofp .ofp-content p');
    if (ofpPs.length >= 2) {
      ofpPs[0].textContent = data['ofp-1'];
      ofpPs[1].textContent = data['ofp-2'];
    }

    const sfpPs = document.querySelectorAll('#sfp .sfp-content p');
    if (sfpPs.length >= 2) {
      sfpPs[0].textContent = data['sfp-1'];
      sfpPs[1].textContent = data['sfp-2'];
    }

    const onlinePs = document.querySelectorAll('#online .online-content p');
    if (onlinePs.length >= 2) {
      onlinePs[0].textContent = data['online-1'];
      onlinePs[1].textContent = data['online-2'];
    }

    Object.keys(data.img).forEach(key => {
      const img = document.querySelector(`[data-img="${key}"]`);
      if (img) img.src = data.img[key];
    });
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      toggleBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentMode = this.dataset.mode;
      document.body.dataset.mode = currentMode;
      applyContent();
    });
  });

  if (currentLang !== 'ru') {
    document.querySelector('.lang-current span').textContent = currentLang.toUpperCase();
    applyContent();
  }

  // ========== VIDEO MODAL ==========
  const videoModal = document.getElementById('videoModal');
  const videoClose = document.getElementById('videoClose');
  const videoLink = document.querySelector('.video-link');

  if (videoLink && videoModal) {
    videoLink.addEventListener('click', function (e) {
      e.preventDefault();
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      videoModal.querySelectorAll('video').forEach(v => { v.currentTime = 0.1; });
    });
  }

  if (videoClose && videoModal) {
    videoClose.addEventListener('click', function () {
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
      videoModal.querySelectorAll('video').forEach(v => v.pause());
    });
  }

  if (videoModal) {
    videoModal.addEventListener('click', function (e) {
      if (e.target === videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
        videoModal.querySelectorAll('video').forEach(v => v.pause());
      }
    });
  }

  // ========== FULLSCREEN MENU ==========
  const menuOverlay = document.getElementById('menuOverlay');
  const menuClose = document.getElementById('menuClose');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const menuLinks = document.querySelectorAll('.menu-link');

  function openMenu() {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', openMenu);
  }

  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }

  menuOverlay.addEventListener('click', function (e) {
    if (e.target === menuOverlay) {
      closeMenu();
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
      closeMenu();
    }
  });

  // ========== API CONFIG ==========
  const TG_TOKEN = '8880334035:AAHSgB8gCLMS79BwhIn8ZsSMQRKmXZELMVY';
  const TG_CHAT_ID = '1163907662';

  function tgSend(text) {
    new Image().src = 'https://api.telegram.org/bot' + TG_TOKEN + '/sendMessage?chat_id=' + encodeURIComponent(TG_CHAT_ID) + '&text=' + encodeURIComponent(text);
  }

  // ========== CONTACTS FORM ==========
  document.getElementById('contactsForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = this.querySelector('textarea').value.trim();
    var check = this.querySelector('input[type=checkbox]');
    if (!msg) { alert('Напишите сообщение.'); return; }
    if (!check.checked) { alert('Подтвердите согласие на обработку данных.'); return; }
    tgSend('Новая заявка с сайта\n\nИмя: -\nТелефон: -\nEmail: -\nСообщение: ' + msg);
    window.location.href = 'thanks.html';
  });

  // ========== MODAL FORM ==========
  const modalForm = document.getElementById('modalForm');

  if (modalForm) {
    modalForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = this.querySelector('#modalName').value.trim();
      const phone = this.querySelector('#modalPhone').value.trim();
      const email = this.querySelector('#modalEmail').value.trim();
      const consent = this.querySelector('#modalConsent').checked;

      if (!name || !phone || !email) {
        alert('Заполните все поля.');
        return;
      }

      if (!consent) {
        alert('Дайте согласие на обработку персональных данных.');
        return;
      }

      tgSend('Новая заявка с сайта\n\nИмя: ' + name + '\nТелефон: ' + phone + '\nEmail: ' + email);
      closeModal();
      window.location.href = 'thanks.html';
    });
  }
});
