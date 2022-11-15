import React, { useState } from "react";

const Tabs = () => {
	
	const [tabs, setTabs] = useState(1);
	const toggleTab = (i) => {
		setTabs(i)
	}

  return (
		<div className="App">
		<div className="container">
			<div className="bloc-tabs">
				<button className={`tabs ${tabs === 1 && "active-tabs"}`} onClick={()=> toggleTab(1)}>Tab 1</button>
				<button className={`tabs ${tabs === 2 && "active-tabs"}`} onClick={()=> toggleTab(2)}>Tab 2</button>
				<button className={`tabs ${tabs === 3 && "active-tabs"}`} onClick={()=> toggleTab(3)}>Tab 3</button>
			</div>

			<div className="content-tabs">
				<div className={`content ${tabs === 1 && "active-content"}`}>
					<h2>Content 1</h2>
					<hr />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
						praesentium incidunt quia aspernatur quasi quidem facilis quo
						nihil vel voluptatum?
					</p>
				</div>

				<div className={`content ${tabs === 2 && "active-content"}`}> 
					<h2>Content 2</h2>
					<hr />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
						voluptatum qui adipisci.
					</p>
				</div>

				<div className={`content ${tabs === 3 && "active-content"}`}> 
					<h2>Content 3</h2>
					<hr />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
						nostrum rerum laudantium totam unde adipisci incidunt modi alias!
						Accusamus in quia odit aspernatur provident et ad vel distinctio
						recusandae totam quidem repudiandae omnis veritatis nostrum
						laboriosam architecto optio rem, dignissimos voluptatum beatae
						aperiam voluptatem atque. Beatae rerum dolores sunt.
					</p>
				</div>
			</div>
		</div>
		</div>
  );
};

export default Tabs;
