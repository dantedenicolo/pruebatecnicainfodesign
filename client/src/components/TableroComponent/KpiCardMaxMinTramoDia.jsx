import { InformationCircleIcon } from '@heroicons/react/solid';
import {
  Icon,
  Card,
  Title,
  Flex,
  Metric,
  ProgressBar,
  Text,
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

const KpiCardMaxMinTramoDia = ({ tramosDiaData }) => {
  if (!Array.isArray(tramosDiaData)) {
    return null;
  }

  const transformData = tramosDiaData.map((item) => {
    return {
      ...item,
      Fecha: getAbbreviatedDay(item.Fecha.substring(0, 10)),
    };
  });

  const transformChartData = () => {
    const chartData = {};

    transformData.forEach((item) => {
      const fecha = item.Fecha;
      const tramo = item.Linea;
      const consumo = item.consumo;

      if (!chartData[tramo]) {
        chartData[tramo] = {
          maxConsumo: consumo,
          fechaMaxConsumo: fecha,
          minConsumo: consumo,
          fechaMinConsumo: fecha,
        };
      } else {
        if (consumo > chartData[tramo].maxConsumo) {
          chartData[tramo].maxConsumo = consumo;
          chartData[tramo].fechaMaxConsumo = fecha;
        }

        if (consumo < chartData[tramo].minConsumo) {
          chartData[tramo].minConsumo = consumo;
          chartData[tramo].fechaMinConsumo = fecha;
        }
      }
    });

    return chartData;
  };

  const transformedChartData = transformChartData();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
      <div>
        <Card decoration="top" decorationColor="indigo">
          <Flex //title
            className="space-x-0.5"
            justifyContent="start"
            alignItems="center"
          >
            <Title>Día Máximo Consumo/Línea</Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Muesta el día de mayor consumo por tramo en el rango de fechas seleccionado"
            />
          </Flex>
        </Card>
        <Card
          className="max-w-lg mx-auto"
        >
          <table className="border-collapse w-full mt-2">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Tramo</th>
                <th className="py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Consumo</th>
                <th className="py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(transformedChartData).map((tramo) => (
                <tr
                  className="border-b border-gray-300 dark:border-gray-500"
                  key={tramo}
                >
                  <td className="py-2 px-4">{tramo}</td>
                  <td className="py-2 px-4">{transformedChartData[tramo].maxConsumo}</td>
                  <td className="py-2 px-4">{transformedChartData[tramo].fechaMaxConsumo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
      <div>
        <Card decoration="top" decorationColor="indigo">
          <Flex //title
            className="space-x-0.5"
            justifyContent="start"
            alignItems="center"
          >
            <Title>Día Mínimo Consumo/Línea</Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Muesta el día de menor consumo por tramo en el rango de fechas seleccionado"
            />
          </Flex>
        </Card>
        <Card
          className="max-w-lg mx-auto"
        >
          <table className="border-collapse w-full mt-2">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Tramo</th>
                <th className="py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Consumo</th>
                <th className="py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(transformedChartData).map((tramo) => (
                <tr
                  key={tramo}
                  className="border-b border-gray-300 dark:border-gray-500"
                >
                  <td className="py-2 px-4">{tramo}</td>
                  <td className="py-2 px-4">{transformedChartData[tramo].minConsumo}</td>
                  <td className="py-2 px-4">{transformedChartData[tramo].fechaMinConsumo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default KpiCardMaxMinTramoDia;
