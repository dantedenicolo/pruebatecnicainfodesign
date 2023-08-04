import {
  BadgeDelta,
  Card,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from '@tremor/react';
import { min } from 'date-fns';

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
  console.log('MaxMinClienteDia', clienteDiaData);

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
  console.log('transformClienteData', transformChartData());

  const transformedChartData = transformChartData();

  return (
    <div>
      <div>
        <Card className="max-w-lg mx-auto">
          <table>
            <thead>
              <tr>
                <th>Tramo</th>
                <th>Max Consumo Comercial</th>
                <th>Fecha</th>
                <th>Max Consumo Industrial</th>
                <th>Fecha</th>
                <th>Max Consumo Residencial</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(transformedChartData).map((tramo) => (
                <tr key={tramo}>
                  <td>{tramo}</td>
                  <td>
                    {transformedChartData[tramo].maxConsumoComercial.consumo}
                  </td>
                  <td>
                    {transformedChartData[tramo].maxConsumoComercial.fecha}
                  </td>
                  <td>
                    {transformedChartData[tramo].maxConsumoIndustrial.consumo}
                  </td>
                  <td>
                    {transformedChartData[tramo].maxConsumoIndustrial.fecha}
                  </td>
                  <td>
                    {transformedChartData[tramo].maxConsumoResidencial.consumo}
                  </td>
                  <td>
                    {transformedChartData[tramo].maxConsumoResidencial.fecha}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
      <div>
        <Card className="max-w-lg mx-auto">
          <table>
            <thead>
              <tr>
                <th>Tramo</th>
                <th>Min Consumo Comercial</th>
                <th>Fecha</th>
                <th>Min Consumo Industrial</th>
                <th>Fecha</th>
                <th>Min Consumo Residencial</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(transformedChartData).map((tramo) => (
                <tr key={tramo}>
                  <td>{tramo}</td>
                  <td>
                    {transformedChartData[tramo].minConsumoComercial.consumo}
                  </td>
                  <td>
                    {transformedChartData[tramo].minConsumoComercial.fecha}
                  </td>
                  <td>
                    {transformedChartData[tramo].minConsumoIndustrial.consumo}
                  </td>
                  <td>
                    {transformedChartData[tramo].minConsumoIndustrial.fecha}
                  </td>
                  <td>
                    {transformedChartData[tramo].minConsumoResidencial.consumo}
                  </td>
                  <td>
                    {transformedChartData[tramo].minConsumoResidencial.fecha}
                  </td>
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
