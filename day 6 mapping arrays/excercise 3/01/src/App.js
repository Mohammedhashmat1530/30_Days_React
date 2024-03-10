
import './App.css';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

export const tenHighestPopulation = [
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

function App() {
  return (<>
    <div className="header">
    <div><h1>30 Days Of React</h1></div>
    <div><h3>Number Generator</h3></div>
    <div><h3>evens are green, odds are yellow and prime numbers are red</h3></div>
    
  </div>
  <div className='visual'>
  <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="population"
            isAnimationActive={false}
            data={tenHighestPopulation}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
         
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
  </div>
  
  
     
  
  </>);
}

export default App;
