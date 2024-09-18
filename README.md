## Getting Started

Installing the dependencies:

```bash
npm install
```

Running the development server:

```bash
npm run dev
```

Running the test:

```bash
npm run test
```

Linting the code:

```bash
npm run lint
```

## File Structure
1. If you want to create a new page, create a new `directory` in the `app` directory, and create a `page.tsx` file in the directory, e.g. `hello-world`. Use the ***kebab-case*** for the directory name.
    Example:

    ```bash
        app/
        ├── hello-world/
        │   └── page.tsx
        └── about/
            └── page.tsx  
        
    ``` 
    
2. If you want to create a new component, create a new `directory` in the `components` directory, and create a `Component.tsx` file in the directory, e.g. `new-component`. Use `index.tsx` to export the component. Please use the ***kebab-case*** for the directory name and ***PascalCase*** for the components.  
    Example:

    ```bash
      components/
      └── forms/
          ├── LoginForm.tsx
          ├── RegisterForm.tsx
          └── index.ts
    ```
3. If you want to create a new utility, there will be a `utils` directory in the root directory, and create a `your-lib.ts` file in the directory, e.g. `fetcher.ts`.

    Example:

    ```bash
      utils/
      └── fetcher.ts
    ```

4. If you want to create a new type or interface, there will be a `types` directory in the root directory, and create a `your-type.ts` file in the directory, e.g. `user-type.ts`.

    Example:

    ```bash
      types/
      └── user-type.ts
    ```
5. If you want to create a new hook, there will be a `hooks` directory in the root directory, and create a `useYourHook.tsx` file in the directory, e.g. `useFetch.tsx`.

    Example:

    ```bash
      hooks/
      └── useFetch.tsx
    ```

## Git flow
1. Create a new branch for your task, e.g. `git checkout -b feature/your-feature`.
2. Commit your changes, e.g. `git commit -m "[GREEN] Lorem ipsum`.
3. Push your changes, e.g. `git push origin pbi-[pbi_number]-[pbi_title]`.