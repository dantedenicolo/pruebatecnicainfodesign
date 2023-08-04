import { InformationCircleIcon } from '@heroicons/react/solid';
import { Card, Title, DonutChart, Icon, Flex } from '@tremor/react';

const DonutChartTramos = ({ tramosData }) => {
  if (!Array.isArray(tramosData)) {
    return null;
  }
  const valueFormatter = (number) =>
    `${Intl.NumberFormat('us').format(number).toString()}`;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div className="col-span-1">
        <Card className="max-w-lg" decoration="top" decorationColor="indigo">
          <Flex //title
            className="space-x-0.5"
            justifyContent="start"
            alignItems="center"
          >
            <Title>Consumos</Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Consumo de Energia en KWh en cada tramo"
            />
          </Flex>
          <DonutChart
            className="mt-4"
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
      <div className="col-span-1">
        <Card className="max-w-lg" decoration="top" decorationColor="indigo">
          <Flex //title
            className="space-x-0.5"
            justifyContent="start"
            alignItems="center"
          >
            <Title>Perdidas</Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Perdidas de Energia en KWh en cada tramo"
            />
          </Flex>
          <DonutChart
            className="mt-4"
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
      <div className="col-span-1">
        <Card className="max-w-lg" decoration="top" decorationColor="indigo">
          <Flex //title
            className="space-x-0.5"
            justifyContent="start"
            alignItems="center"
          >
            <Title>Costos</Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Costo de Energia en $ en cada tramo"
            />
          </Flex>
          <DonutChart
            className="mt-4"
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
      <div className="col-span-1">
        <Card className="max-w-lg" decoration="top" decorationColor="indigo">
          <Flex //title
            className="space-x-0.5"
            justifyContent="start"
            alignItems="center"
          >
            <Title>Costo Perdidas</Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Costo de las perdidas de Energia en $ en cada tramo"
            />
          </Flex>
          <DonutChart
            className="mt-4"
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
