import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const[input, setInput] = useState("");
  const[list, setList] = useState([1, 2, 3, 4]);
  const[selectedFilter, setFilter] = useState("all");

  useEffect(updateFilter, [selectedFilter]);

  function addToList() {
    if (input === '') {
      alert("Пустоты не считаются");
    }
    else {
      setList([...list, input]);
    }
  }

  function addToList() {
    if (input === '') {
        alert("Пустоты не считаются");
    } else {
        setList([...list, Number(input)]);
        setInput('');
        updateFilter();
    }
}

function updateFilter() {
  // eslint-disable-next-line default-case
  switch (selectedFilter) {
    case "all":
      return;
    case "positive":
      setList([...list, Number(input)].filter((num) => num >= 0));
      return;
    case "negative":
      setList([...list, Number(input)].filter((num) => num < 0));
      return;
  }
}
  
  
  return (
    <div className="App">
      <header className="App-header">
        <div class = "addNumber">
        <input id="input" type="text" placeholder="Введите ваше число..." value={input} onChange={e => setInput(e.target.value)} />
                    <button className="addButton" onClick={addToList}>+</button> <br/>
 
                    <input id="filter-all" type="radio" name="filter" value="all" onChange={e => setFilter(e.target.value)} />
                    <label htmlFor="filter-all">Все</label>
 
                    <input id="filter-positive" type="radio" name="filter" value="positive" onChange={e => setFilter(e.target.value)} />
                    <label htmlFor="filter-positive">Положительные</label>
 
                    <input id="filter-negative" type="radio" name="filter" value="negative" onChange={e => setFilter(e.target.value)} />
                    <label htmlFor="filter-negative">Отрицательные</label>
        </div>
        {list.join(", ")}<br/>
      </header>
    </div>
  );
}

export default App;
