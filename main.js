// Fake users for now – later this will be real-time data
const fakeUsers = [
  { name: "Sloth", emoji: "📚" },
  { name: "Night Owl", emoji: "🌙" },
  { name: "FocusFox", emoji: "🦊" },
  { name: "Coffee Spirit", emoji: "☕" }
];

const container = document.getElementById("avatars-container");

fakeUsers.forEach(user => {
  const wrapper = document.createElement("div");
  wrapper.className = "avatar";

  const circle = document.createElement("div");
  circle.className = "avatar-circle";
  circle.textContent = user.emoji;

  const name = document.createElement("div");
  name.className = "avatar-name";
  name.textContent = user.name;

  wrapper.appendChild(circle);
  wrapper.appendChild(name);
  container.appendChild(wrapper);
});
