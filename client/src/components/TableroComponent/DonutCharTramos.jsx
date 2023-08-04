import { Card, Title, DonutChart } from '@tremor/react';


const DonutChartTramos = ({tramosData}) => {
  const valueFormatter = (number) =>
    `${Intl.NumberFormat('us').format(number).toString()}`;
  
  return (
    <div>
      <div className="h-96">
        <Card className="max-w-lg">
          <Title>Consumos</Title>
          <DonutChart
            className="mt-6"
            data={tramosData.map((item) => ({
              Linea: item.Linea,
              Consumo: item.consumo,
            }))}
            category="Consumo"
            index="Linea"
            valueFormatter={valueFormatter}
            colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
          />
        </Card>
      </div>
      <div className="h-96">
        <Card className="max-w-lg">
          <Title>Perdidas</Title>
          <DonutChart
            className="mt-6"
            data={tramosData.map((item) => ({
              Linea: item.Linea,
              Perdidas: item.perdidas,
            }))}
            category="Perdidas"
            index="Linea"
            valueFormatter={valueFormatter}
            colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
          />
        </Card>
      </div>
      <div className="h-96">
        <Card className="max-w-lg">
          <Title>Costos</Title>
          <DonutChart
            className="mt-6"
            data={tramosData.map((item) => ({
              Linea: item.Linea,
              Costos: item.costo,
            }))}
            category="Costos"
            index="Linea"
            valueFormatter={valueFormatter}
            colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
          />
        </Card>
      </div>
      <div className="h-96">
        <Card className="max-w-lg">
          <Title>Costo Perdidas</Title>
          <DonutChart
            className="mt-6"
            data={tramosData.map((item) => ({
              Linea: item.Linea,
              Costos: item.costo * item.perdidas,
            }))}
            category="Costos"
            index="Linea"
            valueFormatter={valueFormatter}
            colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
          />
        </Card>
      </div>
    </div>
  );
};

export default DonutChartTramos;