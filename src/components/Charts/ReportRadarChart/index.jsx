import { Container } from './styles';

import { useEffect, useState } from 'react';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const data_base = [
  {
    categoria: 'Sono',
    pontuacao: 20,
  },
  {
    categoria: 'Mobilidade',
    pontuacao: 20,
  },
  {
    categoria: 'Sono',
    pontuacao: 20,
  },
  {
    categoria: 'Mobilidade',
    pontuacao: 10,
  },
  {
    categoria: 'Mobilidade',
    pontuacao: 10,
  },
  {
    categoria: 'Mobilidade',
    pontuacao: 10,
  },
  {
    categoria: 'Mobilidade',
    pontuacao: 10,
  },
];

export function ReportRadarChart({ data, ...rest }) {
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
        <RadarChart cx="50s%" cy="50%" outerRadius="80%" data={dataFinal}>
          <PolarGrid />
          <Tooltip />
          <PolarAngleAxis dataKey="categoria" />
          <PolarRadiusAxis />
          <Radar
            name="Radar Chart"
            dataKey="pontuacao"
            stroke="#3F2F75"
            fill="#36248A"
            fillOpacity={0.2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  );
}
