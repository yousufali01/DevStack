# 🚀 DevStack

A modern and responsive React web application built with React and other modern web technologies. This project provides a simple, user-friendly interface with dynamic data and interactive features.

## 📌 Project Description

DevStack is a React-based web application designed to provide users with a smooth and interactive experience. The project uses JSON data to display dynamic information and React components to create a clean and reusable UI.

## 🛠️ Technologies Used

- React
- TypeScript / JavaScript
- HTML
- CSS
- Tailwind CSS
- JSON
- React Hooks
- Git & GitHub

## ✨ Features

### 1. 📊 Dynamic Data Display

The application loads data from a JSON file and displays it dynamically using React.

### 2. 🔄 Interactive UI

Users can interact with the application and see the interface update based on their actions.

### 3. 📱 Responsive Design

The application is designed to work properly on different screen sizes, including desktop, tablet, and mobile devices.

---

# 🧠 React Questions & Answers

## i. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It is used in React because it makes UI code easier to read and helps us create React components more easily.

---

## ii. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

In simple words:

- Props → received from parent
- State → managed by the component itself

---

## iii. What does the useState hook do, and where did you use it in this project?

The `useState` hook is used to create and manage changing data inside a React component.

For example, I used `useState` to manage data that changes when the user interacts with the application, such as selected items, cart/stack data, or UI state.

Example:

```tsx
const [items, setItems] = useState([]);
```

Here, `items` stores the current data and `setItems` updates it.

---

## iv. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs code when certain conditions happen, such as when a component loads.

I used `useEffect` to load the JSON data when the component starts.

Example:

```tsx
useEffect(() => {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => setItems(data));
}, []);
```

The empty `[]` means the effect runs when the component loads.

---

## v. Why does every item in a map() list need a unique key prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item has changed, been added, or removed.

Example:

```tsx
{
  items.map((item) => <Card key={item.id} item={item} />);
}
```

Here, `item.id` is used as the unique key.

---

## vi. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, if the stack is empty, I can show an empty message:

```tsx
{
  stack.length === 0 ? <p>Your stack is empty.</p> : <StackItems />;
}
```

If the stack is empty, the message is shown. Otherwise, the stack items are displayed.

---

## vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

Example:

```tsx
<Card player={player} />
```

The child receives it:

```tsx
function Card({ player }) {
  return <h2>{player.playerName}</h2>;
}
```

To send something back to the parent, the parent can pass a **function as a prop**.

Example:

```tsx
<Card onAdd={handleAdd} />
```

Then the child can call that function:

```tsx
<button onClick={() => onAdd(player)}>Add</button>
```

So, in simple words:

**Parent → Child:** Props
**Child → Parent:** Callback function through props

---

# 👨‍💻 Author

Developed as a React project using modern web development practices.

## ⭐ Thank You

If you like this project, feel free to give the repository a ⭐ on GitHub!
