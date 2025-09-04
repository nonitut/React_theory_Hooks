# 🚀 Шпаргалка по хукам React

| Хук          | Синтаксис                                   | Для чего нужен                                                                 |
|--------------|---------------------------------------------|--------------------------------------------------------------------------------|
| **useState** | `const [state, setState] = useState(init)` | Локальное состояние (счётчики, input, списки). Ререндер при обновлении.        |
| **useEffect**| `useEffect(() => {...}, [deps])`           | Побочные эффекты: загрузка данных, таймеры, логирование. `[]` – 1 раз, `[deps]` – при изменении зависимостей. |
| **useRef**   | `const ref = useRef(value)`                | Сохраняет значение между рендерами, **без** ререндера. Доступ к DOM-элементу.  |
| **useMemo**  | `const memoVal = useMemo(() => fn(), [d])` | Кэширует результат тяжёлых вычислений.                                         |
| **useCallback** | `const memoFn = useCallback(fn, [d])`   | Кэширует функцию, чтобы не пересоздавалась каждый рендер.                      |
| **useContext** | `const value = useContext(MyContext)`     | Получение глобальных данных (тема, язык, авторизация).                         |
| **useReducer** | `const [state, dispatch] = useReducer(reducer, init)` | Альтернатива `useState` для сложных состояний и логики.                        |

---

## 🧠 Когда что использовать?
- **useState** → простые данные, которые меняются (текст, число, список).  
- **useEffect** → работа с внешним миром (API, события, таймеры).  
- **useRef** → хранить «сквозные» данные или ссылку на DOM.  
- **useMemo / useCallback** → оптимизация тяжёлых вычислений и функций.  
- **useContext** → глобальное состояние без «проброса пропсов».  
- **useReducer** → если логика сложнее, чем «счётчик + setState».  

---

my-project/
│
├─ frontend/    ← React + Vite
│   ├─ Dockerfile          ← как собрать фронт-контейнер
│   └─ npm start           ← локальный dev-сервер (для разработки без Docker)
│
├─ backend/     ← Python + FastAPI
│   ├─ Dockerfile          ← как собрать бэк-контейнер
│   └─ uvicorn main:app --reload  ← dev-сервер (локально)
│
├─ database/    ← PostgreSQL или SQLite
│   └─ init.sql (опционально) ← начальные данные для базы
│
└─ docker-compose.yml      ← описывает как собрать и связать все контейнеры

---

## 📌 Соответствие команд `npm` и `yarn`

| Действие                          | npm                                    | yarn                       |
|-----------------------------------|----------------------------------------|----------------------------|
| Установить зависимости            | `npm install`                          | `yarn install`             |
| Добавить пакет                    | `npm install react`                    | `yarn add react`           |
| Добавить пакет как dev-зависимость| `npm install --save-dev eslint`        | `yarn add eslint --dev`    |
| Удалить пакет                     | `npm uninstall react`                  | `yarn remove react`        |
| Запустить скрипт (`start`)        | `npm start` или `npm run start`        | `yarn start`               |
| Запустить кастомный скрипт        | `npm run build`                        | `yarn build`               |
| Установить все зависимости заново | `rm -rf node_modules && npm install`   | `yarn install --force`     |

---

### 🔑 Главное правило
- Если в проекте есть **`package-lock.json`** → используй **npm**.  
- Если в проекте есть **`yarn.lock`** → используй **yarn**.  
- Не мешай их вместе 🚫

---



