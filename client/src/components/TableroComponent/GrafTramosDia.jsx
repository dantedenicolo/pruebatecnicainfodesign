import { InformationCircleIcon } from '@heroicons/react/solid';
import {
  Flex,
  Title,
  Icon,
  TabGroup,
  TabList,
  Tab,
  AreaChart,
  Text,
  Card,
} from '@tremor/react';


const getAbbreviatedDay = (dateString) => {
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dayOfWeek = daysOfWeek[date.getDay()];

  return `${year}-${month}-${day} ${dayOfWeek}`;
};



const dataFormatter = (number) => {
  return Intl.NumberFormat('us').format(number).toString();
}

const GraficoTramosDia = ({ tramosDiaData }) => {
  console.log(tramosDiaData);

  const transformData = tramosDiaData.map((item) => {
    return {
      ...item,
      Fecha: getAbbreviatedDay(item.Fecha.substring(0, 10)),
    };
  });

  const colors = ['indigo', 'cyan', 'yellow', 'green', 'red'];
  const categories = ['Tramo 1', 'Tramo 2', 'Tramo 3', 'Tramo 4', 'Tramo 5'];

  const transformChartData = () => {
    const chartData = [];

    transformData.forEach((item) => {
      const fecha = item.Fecha;
      const tramo = item.Linea;
      const consumo = item.consumo;

      if (!chartData[fecha]) {
        chartData[fecha] = { Fecha: fecha };
      }
      chartData[fecha][tramo] = consumo;
    });

    return Object.values(chartData);
  };

  console.log(transformChartData());


  const value = tramosDiaData.reduce((acc, item) => {
    const linea = item.Linea;
    const consumo = item.consumo;
    if (!acc[linea]) {
      acc[linea] = []
    }
    acc[linea].push(consumo)
    return acc
  }, {})
  
  console.log(categories)
  console.log(value)

  

  return (
    <>
      <div className="md:flex justify-between">
        <Card>
          <Flex //title
            className="space-x-0.5"
            justifyContent="start"
            alignItems="center"
          >
            <Title> Performance History </Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Shows daily increase or decrease of particular domain"
            />
          </Flex>
          <Text> Daily change per domain </Text>
        </Card>
      </div>
      {/* web */}
      <div className="mt-8 hidden sm:block">
        <AreaChart
          data={transformChartData()}
          index="Fecha"
          categories={categories}
          colors={colors}
          value={['Tramo 1', 'Tramo 2', 'Tramo 3', 'Tramo 4', 'Tramo 5']}
          valueFormatter={dataFormatter}
        />
      </div>
      {/* mobile */}
      {/* <div className="mt-8 sm:hidden">
        <AreaChart
          {...areaChartArgs}
          startEndOnly={true}
          showGradient={false}
          showYAxis={false}
        />
      </div> */}
    </>
  );
};

export default GraficoTramosDia;