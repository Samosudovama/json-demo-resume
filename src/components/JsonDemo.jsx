import { useState } from "react";

function JsonDemo() {
   // Это как будто пришёл ответ от сервера: JSON-строка
   const rawJson = `{
    "projects": [
      {
        "title": "FlowerShop",
        "description": "Магазин мебели на React + Vite",
        "status": "готово",
        "tags": ["React", "Vite", "Git"]
      },
      {
       "title": "Cat API Demo",
       "description": "Мини-проект: асинхронность, состояния, вывод картинок",
       "status": "в работе",
       "tags": ["React", "async/await", "API"]
      },
      {
        "title": "MED-CENTER",
        "description": "Медицинский центр: слайдер, тёмные тона, адаптив",
        "status": "готово",
        "tags": ["React", "CSS", "responsive"]
      }
    ]
  }`;

   const [data, setData] = useState(null);

   const loadData = () => {
      try {
         const parsed = JSON.parse(rawJson);
         setData(parsed);
      } catch (err) {
         console.error("Ошибка парсинга JSON:", err);
      }
   };

   if (!data) {
      return (
         <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Моё резюме-портфолио 📄</h2>
            <button onClick={loadData} style={{ padding: "10px 20px" }}>
               Загрузить проекты
            </button>
         </div>
      );
   }

   return (
      <div
         style={{
            padding: "30px",
            fontFamily: "Arial",
            maxWidth: "1200px",
            margin: "0 auto",
         }}
      >
         {/* --- Шапка резюме --- */}
         <header
            style={{
               display: "flex",
               flexWrap: "wrap",
               gap: "24px",
               marginBottom: "40px",
               alignItems: "center",
            }}
         >
            {/* Фото слева */}
            <div style={{ flex: "1", minWidth: "200px", textAlign: "center" }}>
               <img
                  src="/img.jpg"
                  alt="Фото Маши"
                  style={{
                     width: "180px",
                     height: "225px",
                     borderRadius: "8px",
                     objectFit: "cover",
                     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
               />
               <p
                  style={{ marginTop: "12px", color: "#666", fontSize: "14px" }}
               >
                  Это моё фото
               </p>
            </div>

            {/* Данные справа */}
            <div style={{ flex: "2", minWidth: "300px" }}>
               <h1 style={{ margin: "0 0 8px", fontSize: "32px" }}>
                  Мария Самосудова
               </h1>
               <p style={{ margin: "4px 0", color: "#444", fontSize: "16px" }}>
                  Дата рождения: 07.01.1981г.
               </p>
               <p style={{ margin: "4px 0", color: "#444", fontSize: "16px" }}>
                  Адрес: г.Тольятти, ул.Мира. д.43.
               </p>
               <p style={{ margin: "4px 0", color: "#444", fontSize: "16px" }}>
                  Телефон: +7 (967)491-07-32
               </p>
               <p style={{ margin: "4px 0", color: "#444", fontSize: "16px" }}>
                  GitHub:{" "}
                  <a
                     href="https://github.com/Samosudovama"
                     target="_blank"
                     rel="noopener noreferrer"
                     style={{ color: "#2b8a3e", textDecoration: "none" }}
                  >
                     Samosudovama
                  </a>
               </p>
            </div>
         </header>

         {/* --- Список проектов --- */}
         <section>
            <h2 style={{ marginBottom: "24px" }}>Мои проекты (из JSON) 📦</h2>
            <div
               style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "16px",
               }}
            >
               {data.projects.map((project, idx) => (
                  <div
                     key={idx}
                     style={{
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "16px",
                        backgroundColor: "#fafafa",
                     }}
                  >
                     <h3 style={{ margin: "0 0 8px" }}>{project.title}</h3>
                     <p style={{ color: "#555", margin: "0 0 12px" }}>
                        {project.description}
                     </p>
                     <div>
                        <span
                           style={{
                              backgroundColor:
                                 project.status === "готово"
                                    ? "#4ade80"
                                    : "#fbbf24",
                              color: "#fff",
                              padding: "4px 8px",
                              borderRadius: "4px",
                              fontSize: "12px",
                              marginRight: "6px",
                           }}
                        >
                           {project.status}
                        </span>
                        {project.tags.map((tag, tIdx) => (
                           <span
                              key={tIdx}
                              style={{
                                 backgroundColor: "#e5e7eb",
                                 padding: "4px 8px",
                                 borderRadius: "4px",
                                 fontSize: "12px",
                                 marginRight: "6px",
                              }}
                           >
                              {tag}
                           </span>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </section>
      </div>
   );
}

export default JsonDemo;
