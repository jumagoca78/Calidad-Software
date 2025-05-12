# Checklist para Refactorizar Componentes en React

> Guía paso a paso para revisar y mejorar componentes React. Úsala para identificar malas prácticas y mejorar la calidad del código.

---

## 1. ¿El componente tiene una única responsabilidad?

**Pregúntate:**  
- ¿Este componente hace más de una cosa?  
- ¿Tiene lógica de negocio mezclada con presentación?

**Ejemplo:**
```jsx
// Mezcla de lógica, UI y validación en un solo archivo
function ProductCard() {
  const [price, setPrice] = useState(0);
  const calculateDiscount = () => { ... };
  return <div>{/* UI */}</div>;
}
```

**Acción sugerida:**
- Extrae lógica a hooks (`useProductPricing`)  
- Separa en componentes más pequeños (`ProductPrice`, `ProductInfo`, etc.)

---

## 2. ¿Hay funciones o bloques de JSX demasiado largos?

**Pregúntate:**  
- ¿El `return` del componente tiene más de 30 líneas?  
- ¿Hay condicionales anidados o repetitivos?

**Ejemplo:**
```jsx
return (
  <div>
    {user.isAdmin ? (
      user.active ? <AdminDashboard /> : <AdminWarning />
    ) : (
      <UserDashboard />
    )}
  </div>
);
```

**Acción sugerida:**
- Crea funciones intermedias: `renderDashboard()`  
- Extrae componentes específicos: `AdminView`, `UserView`

---

## 3. ¿El estado está bien ubicado?

**Pregúntate:**  
- ¿Estoy levantando el estado innecesariamente?  
- ¿Este `useState` debería ir aquí o en el padre?  
- ¿El estado debería estar en un contexto global?

**Ejemplo:**
```jsx
//  Manejo local de un estado que se necesita en varios niveles
function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return <ProductDetail product={selectedProduct} />;
}
```

**Acción sugerida:**
- Usa un contexto (`ProductContext`)  
- Levanta el estado al componente contenedor o App

---

##  4. ¿El componente es reutilizable?

**Pregúntate:**  
- ¿Este componente depende demasiado de un `prop` específico?  
- ¿Puedo usarlo en otro lugar con mínimas modificaciones?

**Ejemplo:**
```jsx
function AdminButton({ onClick }) {
  return <button className="admin-only" onClick={onClick}>Edit</button>;
}
```

**Acción sugerida:**
- Generaliza como `Button` con `variant` o `role`  
- Mueve estilos e iconos a props

---

##  5. ¿Hay lógica que se repite?

**Pregúntate:**  
- ¿He escrito esta función o patrón más de una vez?  
- ¿Estoy copiando y pegando validaciones, transformaciones, etc.?

**Ejemplo:**
```jsx
//  Validación repetida en 3 formularios
if (!email.includes('@')) return 'Correo inválido';
```

**Acción sugerida:**
- Extrae a función `validateEmail()`  
- Usa un helper común o un custom hook (`useFormValidation`)

---

##  6. ¿Uso bien los hooks?

**Pregúntate:**  
- ¿Estoy usando `useEffect` para todo?  
- ¿Estoy controlando dependencias correctamente?  
- ¿Podría extraer lógica a un custom hook?

**Ejemplo:**
```jsx
useEffect(() => {
  fetchData();
  setTimeout(() => showAlert(), 500);
}, []);
```

**Acción sugerida:**
- Crea `useFetchData()`  
- Evita efectos colaterales mezclados

---

##  7. ¿Se puede mejorar el rendimiento?

**Pregúntate:**  
- ¿Este componente se re-renderiza innecesariamente?  
- ¿Puedo usar `React.memo` o `useCallback`?

**Ejemplo:**
```jsx
//  Función recreada en cada render
<button onClick={() => handleClick(item.id)}>Click</button>
```

**Acción sugerida:**
- Usa `useCallback(handleClick, [item.id])`  
- Memoriza componentes puros con `React.memo`

---

##  8. ¿Está bien estructurado el proyecto?

**Pregúntate:**  
- ¿Están mis componentes y hooks organizados por funcionalidad?  
- ¿Estoy siguiendo una convención clara?

**Recomendación de estructura:**
```
/components
  /User
    UserProfile.jsx
    UserForm.jsx
    UserDisplay.jsx
/hooks
  useUserForm.js
/utils
  validation.js
```

---

##  Resumen final del checklist

| Criterio                          | Revisión | Acción sugerida              |
|----------------------------------|----------|------------------------------|
| Componente tiene una sola responsabilidad | ✅ / ❌ | Dividir, extraer lógica     |
| JSX legible y corto              | ✅ / ❌ | Crear funciones o subcomponentes |
| Estado bien ubicado              | ✅ / ❌ | Levantar o mover a contexto |
| Reutilización posible            | ✅ / ❌ | Parametrizar                 |
| Código duplicado                 | ✅ / ❌ | Extraer helpers              |
| Uso de hooks correcto            | ✅ / ❌ | Crear custom hooks           |
| Rendimiento optimizado           | ✅ / ❌ | Memoización, callbacks       |
| Estructura clara de archivos     | ✅ / ❌ | Reorganizar carpetas         |
