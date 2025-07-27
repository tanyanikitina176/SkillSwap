import BriefcaseIcon from '@icons/briefcase.svg';
import PaletteIcon from '@icons/palette.svg';
import GlobalIcon from '@icons/global.svg';
import BookIcon from '@icons/book.svg';
import HomeIcon from '@icons/home.svg';
import LifestyleIcon from '@icons/lifestyle.svg';
import type { Category } from '../../../entities/Category/CategoryTypes';

export const Icons = {
  BriefcaseIcon,
  PaletteIcon,
  GlobalIcon,
  BookIcon,
  HomeIcon,
  LifestyleIcon,
} as const;

export const CATEGORIES: Category[] = [
  {
    id: 'business',
    name: 'Бизнес и карьера',
    color: 'var(--tag-business)',
    icon: Icons.BriefcaseIcon,
    subcategories: [
      { id: 'team_management', name: 'Управление командой' },
      { id: 'marketing', name: 'Маркетинг и реклама' },
      { id: 'sales', name: 'Продажи и переговоры' },
      { id: 'personal_brand', name: 'Личный бренд' },
      { id: 'resume', name: 'Резюме и собеседование' },
      { id: 'time_management', name: 'Тайм менеджмент' },
      { id: 'project_management', name: 'Проектное управление' },
      { id: 'entrepreneurship', name: 'Предпринимательство' },
    ],
  },
  {
    id: 'creative',
    name: 'Творчество и искусство',
    color: 'var(--tag-creative)',
    icon: Icons.PaletteIcon,
    subcategories: [
      { id: 'drawing', name: 'Рисование и иллюстрация' },
      { id: 'photography', name: 'Фотография' },
      { id: 'video_editing', name: 'Видеомонтаж' },
      { id: 'music', name: 'Музыка и звук' },
      { id: 'acting', name: 'Актёрское мастерство' },
      { id: 'creative_writing', name: 'Креативное письмо' },
      { id: 'art_therapy', name: 'Арт-терапия' },
      { id: 'decor', name: 'Декор и DIY' },
    ],
  },
  {
    id: 'languages',
    name: 'Иностранные языки',
    color: 'var(--tag-languages)',
    icon: Icons.GlobalIcon,
    subcategories: [
      { id: 'english', name: 'Английский' },
      { id: 'french', name: 'Французский' },
      { id: 'spanish', name: 'Испанский' },
      { id: 'german', name: 'Немецкий' },
      { id: 'chinese', name: 'Китайский' },
      { id: 'japanese', name: 'Японский' },
      { id: 'exams_prep', name: 'Подготовка к экзаменам (IELIS, TOEFL)' },
    ],
  },
  {
    id: 'education',
    name: 'Образование и развитие',
    color: 'var(--tag-education)',
    icon: Icons.BookIcon,
    subcategories: [
      { id: 'personal_development', name: 'Личностное развитие' },
      { id: 'learning_skills', name: 'Навыки обучения' },
      { id: 'cognitive_techniques', name: 'Когнитивные техники' },
      { id: 'speed_reading', name: 'Скорочтение' },
      { id: 'teaching_skills', name: 'Навыки преподавания' },
      { id: 'coaching', name: 'Коучинг' },
    ],
  },
  {
    id: 'home',
    name: 'Дом и уют',
    color: 'var(--tag-home)',
    icon: Icons.HomeIcon,
    subcategories: [
      { id: 'cleaning', name: 'Уборка и организация' },
      { id: 'home_finance', name: 'Домашние финансы' },
      { id: 'cooking', name: 'Приготовление еды' },
      { id: 'plants', name: 'Домашние растения' },
      { id: 'repair', name: 'Ремонт' },
      { id: 'storage', name: 'Хранение вещей' },
    ],
  },
  {
    id: 'health',
    name: 'Здоровье и лайфстайл',
    color: 'var(--tag-health)',
    icon: Icons.LifestyleIcon,
    subcategories: [
      { id: 'yoga', name: 'Йога и медитация' },
      { id: 'nutrition', name: 'Питание и ЗОЖ' },
      { id: 'mental_health', name: 'Ментальное здоровье' },
      { id: 'mindfulness', name: 'Осознанность' },
      { id: 'fitness', name: 'Физические тренировки' },
      { id: 'sleep', name: 'Сон и восстановление' },
      { id: 'work_life_balance', name: 'Баланс жизни и работы' },
    ],
  },
];
