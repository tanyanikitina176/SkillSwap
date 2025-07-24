# Проект SkillSwap

## Стэк: React + TypeScript + Vite

[Макет](<https://www.figma.com/design/bKwOakHJI7Z2mh2zVCBphP/SkillSwap---Для-разработчиков?node-id=386-11920&t=xN1r61F4DvdVdr9v-0>)

Скелет проекта выглядит так:
src/
 ├── api/             # методы работы с мок-JSON (axios/fetch)
 │    ├── Skill       # api для skill 
 │    ├── User        # api для user 
 │    └── Request     # api для request    
 ├── app/
 │    ├── fonts/       # файлы шрифтов
 │    ├── protected-route/  # описание функции protected-route
 │    ├── store.ts     # общий стор 
 │    ├── App.css
 │    ├── App.tsx      # инициализация,
 │    └── global.css   # глобальные стили
 ├── entities/         # модели домена (Skill, User, Request)
 │    ├── Skill        # описать слайс, типы интерфейсов
 │    ├── User
 │    └── Request
 ├── features/
 │    ├── auth/
 │    ├── skills/
 │    ├── favorites/
 │    └── requests/
 ├── widgets/          # готовые фич-блоки (SkillCard, FiltersBar)
 ├── pages/            # главная, профайл, skill, favorites
 ├── shared/
 │    ├── ui/          # атомы/молекулы
 │    ├── hooks/       # предназначена для переиспользуемых пользовательских хуков: useDebounce, useLocalStorage ...
 │    └── lib/         # helpers, constants
 └── index.tsx
public/
 db/
  ├── skills.json
  └── users.json
