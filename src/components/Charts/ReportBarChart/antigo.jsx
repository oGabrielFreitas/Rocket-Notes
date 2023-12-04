import { Container } from './styles';

import { useEffect, useState } from 'react';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data_base = [
  {
    categoria: 'Sono',
    pontuacao: -10,
    color: 'red',
  },
  {
    categoria: 'Mobilidade',
    pontuacao: 20,
    color: 'blue',
  },
  {
    categoria: 'Sono',
    pontuacao: -10,
    color: 'red',
  },
  {
    categoria: 'Mobilidade',
    pontuacao: 20,
    color: 'red',
  },
];

export function ReportBarChart({ data, ...rest }) {
  const [dataObject, setDataObject] = useState([]);
  const [dataFinal, setDataFinal] = useState([]);

  useEffect(() => {
    if (typeof data === 'string') {
      try {
        const jsonData = JSON.parse(data);
        setDataObject(jsonData);

        // Transforma o objeto JSON em um array de dados
        let dataFinal = Object.entries(jsonData).map(
          ([categoria, pontuacao]) => ({
            categoria,
            pontuacao,
          }),
        );

        setDataFinal(dataFinal);
      } catch (error) {
        console.error('Erro ao parsear JSON:', error);
      }
    } else {
      setDataObject(data);
    }
  }, [data]);

  console.log(dataObject);
  // console.log(dataObject);

  return (
    <div>
      <ResponsiveContainer width="50%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={dataFinal}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 100,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="categoria" /> */}
          <Tooltip fill="black" />
          <Bar dataKey="pontuacao" fill="#00B0BF" barSize={30} />
          <XAxis
            dataKey="categoria"
            stroke="#36248A"
            orientation="bottom"
            // type="category"
            // allowDataOverflow={1}
            interval={'preserveStart'}
            // label={'Duneida'}
            name
            tickSize={50}
            tick={{ textAlign: 'center' }}
            tickLine={false}
            // tick={false}
            // tick={{ stroke: 'red', strokeWidth: 2 }}
            angle={-80}
            // style={{ marginTop: 200 !important}}
          />
          <YAxis />
          <ReferenceLine y={0} stroke="#888" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
