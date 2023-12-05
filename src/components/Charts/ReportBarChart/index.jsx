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
  LabelList,
} from 'recharts';

const data_base = [
  {
    categoria: 'Sono',
    pontuacao: -10,
    color: 'red',
  },
  {
    categoria: 'Mobilidade',
    pontuacao: -22,
    color: 'blue',
  },
  {
    categoria: 'Sono',
    pontuacao: -10,
    color: 'red',
  },
  {
    categoria: 'Mobilidade',
    pontuacao: 50,
    color: 'red',
  },
];

export function ReportBarChart({ data, ...rest }) {
  const [dataFinal, setDataFinal] = useState([]);

  useEffect(() => {
    try {
      const jsonData = JSON.parse(data);

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
  }, [data]);

  // console.log(dataObject);
  // console.log(dataObject);

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={500}
          data={dataFinal}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 80,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip fill="black" />
          <Bar dataKey="pontuacao" fill="#00B0BF" barSize={30} />
          <XAxis
            dataKey="categoria"
            stroke="#36248A"
            orientation="bottom"
            type="category"
            interval={0}
            // tickSize={50}
            tick={{ textAnchor: 'end' }}
            tickLine={false}
            angle={-70}
          />
          <YAxis padding={{ top: 20, bottom: 20 }} stroke="#36248A" />
          <ReferenceLine y={0} stroke="#888" ifOverflow="extendDomain" />
          <LabelList dataKey="categoria" position="bottom" angle="90" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}
