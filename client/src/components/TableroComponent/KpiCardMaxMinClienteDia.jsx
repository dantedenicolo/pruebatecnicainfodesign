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

const KpiCardMaxMinClienteDia = ({ clienteDiaData }) => {
  if (!Array.isArray(clienteDiaData)) {
    return null;
  }

  const transformData = clienteDiaData.map((item) => {
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
      const consumoComercial = item.consumo_comercial;
      const consumoIndustrial = item.consumo_industrial;
      const consumoResidencial = item.consumo_residencial;

      if (!chartData[tramo]) {
        chartData[tramo] = {
          maxConsumoComercial: {
            consumo: consumoComercial,
            fecha: fecha,
          },
          maxConsumoIndustrial: {
            consumo: consumoIndustrial,
            fecha: fecha,
          },
          maxConsumoResidencial: {
            consumo: consumoResidencial,
            fecha: fecha,
          },
          minConsumoComercial: {
            consumo: consumoComercial,
            fecha: fecha,
          },
          minConsumoIndustrial: {
            consumo: consumoIndustrial,
            fecha: fecha,
          },
          minConsumoResidencial: {
            consumo: consumoResidencial,
            fecha: fecha,
          },
        };
      } else {
        if (consumoComercial > chartData[tramo].maxConsumoComercial.consumo) {
          chartData[tramo].maxConsumoComercial.consumo = consumoComercial;
          chartData[tramo].maxConsumoComercial.fecha = fecha;
        } else if (
          consumoComercial < chartData[tramo].minConsumoComercial.consumo
        ) {
          chartData[tramo].minConsumoComercial.consumo = consumoComercial;
          chartData[tramo].minConsumoComercial.fecha = fecha;
        }

        if (consumoIndustrial > chartData[tramo].maxConsumoIndustrial.consumo) {
          chartData[tramo].maxConsumoIndustrial.consumo = consumoIndustrial;
          chartData[tramo].maxConsumoIndustrial.fecha = fecha;
        } else if (
          consumoIndustrial < chartData[tramo].minConsumoIndustrial.consumo
        ) {
          chartData[tramo].minConsumoIndustrial.consumo = consumoIndustrial;
          chartData[tramo].minConsumoIndustrial.fecha = fecha;
        }

        if (
          consumoResidencial > chartData[tramo].maxConsumoResidencial.consumo
        ) {
          chartData[tramo].maxConsumoResidencial.consumo = consumoResidencial;
          chartData[tramo].maxConsumoResidencial.fecha = fecha;
        } else if (
          consumoResidencial < chartData[tramo].minConsumoResidencial.consumo
        ) {
          chartData[tramo].minConsumoResidencial.consumo = consumoResidencial;
          chartData[tramo].minConsumoResidencial.fecha = fecha;
        }
      }
    });

    return chartData;
  };

  const transformedChartData = transformChartData();

  return (
    <div className="grid sm:grid-cols-1 gap-4 w-full">
      <div>
        <Card decoration="top" decorationColor="indigo">
          <Flex //title
            className="space-x-0.5"
            justifyContent="start"
            alignItems="center"
          >
            <Title>Día Máximo Consumo/Línea/Cliente</Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Muesta el día de mayor consumo de cada tramo, por cliente, en el rango de fechas seleccionado"
            />
          </Flex>
        </Card>
        <Card
          className="max-w-full mx-auto"
        >
          <table className="border-collapse w-full mt-2">
            <thead>
              <tr>
                <th className="py-2 px-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Tramo</th>
                <th className="py-2 px-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Max Consumo Comercial</th>
                <th className="py-2 px-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Fecha</th>
                <th className="py-2 px-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Max Consumo Industrial</th>
                <th className="py-2 px-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Fecha</th>
                <th className="py-2 px-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Max Consumo Residencial</th>
                <th className="py-2 px-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(transformedChartData).map((tramo) => (
                <tr key={tramo} className="border-b border-gray-300 dark:border-gray-500">
                  <td className="py-2 px-4 text-xs">{tramo}</td>
                  <td className="py-2 px-4 text-xs">{transformedChartData[tramo].maxConsumoComercial.consumo}</td>
                  <td className="py-2 px-4 text-xs">{transformedChartData[tramo].maxConsumoComercial.fecha}</td>
                  <td className="py-2 px-4 text-xs">{transformedChartData[tramo].maxConsumoIndustrial.consumo}</td>
                  <td className="py-2 px-4 text-xs">{transformedChartData[tramo].maxConsumoIndustrial.fecha}</td>
                  <td className="py-2 px-4 text-xs">{transformedChartData[tramo].maxConsumoResidencial.consumo}</td>
                  <td className="py-2 px-4 text-xs">{transformedChartData[tramo].maxConsumoResidencial.fecha}</td>
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
            <Title>Día Mínimo Consumo/Línea/Cliente</Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Muesta el día de menor consumo de cada tramo, por cliente, en el rango de fechas seleccionado"
            />
          </Flex>
        </Card>
        <Card
          className="max-w-full mx-auto"
        >
          <table className="border-collapse w-full mt-2">
            <thead>
              <tr>
                <th className="py-2 px-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Tramo</th>
                <th className="py-2 px-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Min/Cons Comercial</th>
                <th className="py-2 px-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Fecha</th>
                <th className="py-2 px-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Min/Cons Industrial</th>
                <th className="py-2 px-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Fecha</th>
                <th className="py-2 px-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Min/Cons Residencial</th>
                <th className="py-2 px-4 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-500">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(transformedChartData).map((tramo) => (
                <tr key={tramo} className="border-b border-gray-300 dark:border-gray-500">
                  <td className="py-2 px-4 text-xs">{tramo}</td>
                  <td className="py-2 px-4 text-xs">{transformedChartData[tramo].minConsumoComercial.consumo}</td>
                  <td className="py-2 px-4 text-xs">{transformedChartData[tramo].minConsumoComercial.fecha}</td>
                  <td className="py-2 px-4 text-xs">{transformedChartData[tramo].minConsumoIndustrial.consumo}</td>
                  <td className="py-2 px-4 text-xs">{transformedChartData[tramo].minConsumoIndustrial.fecha}</td>
                  <td className="py-2 px-4 text-xs">{transformedChartData[tramo].minConsumoResidencial.consumo}</td>
                  <td className="py-2 px-4 text-xs">{transformedChartData[tramo].minConsumoResidencial.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default KpiCardMaxMinClienteDia;
