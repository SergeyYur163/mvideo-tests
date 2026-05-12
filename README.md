# Тестовое задание — UI/API автотесты для M.Video

Проект с простыми UI и API автотестами, написанными на Playwright + TypeScript.

## Что реализовано

### UI тесты

- Проверка отображения основных элементов главной страницы
- Проверка открытия страницы корзины

### API тесты

- Проверка успешного ответа `GET /products`
- Проверка наличия товаров в ответе API

---

## Стек

- Playwright
- TypeScript
- Node.js

---

## Структура проекта

```bash
tests/
  main-page.spec.ts
  cart.spec.ts
  api.spec.ts

Установка проекта

Установка зависимостей:

npm install

Установка браузеров Playwright:

npx playwright install

Запуск тестов

Запуск всех тестов:

npx playwright test --project=chromium

Запуск тестов с открытием браузера:

npx playwright test --project=chromium --headed

Примечание

В проекте реализованы базовые smoke UI тесты для сайта M.Video и простые API тесты для публичного тестового API.