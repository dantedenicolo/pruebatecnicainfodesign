import {
  BadgeDelta,
  Card,
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
    <div>
      <div>
        <Card className="max-w-lg mx-auto">
          <table>
            <thead>
              <tr>
                <th>Tramo</th>
                <th>Consumo</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(transformedChartData).map((tramo) => (
                <tr key={tramo}>
                  <td>{tramo}</td>
                  <td>{transformedChartData[tramo].maxConsumo}</td>
                  <td>{transformedChartData[tramo].fechaMaxConsumo}</td>
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
                <th>Consumo</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(transformedChartData).map((tramo) => (
                <tr key={tramo}>
                  <td>{tramo}</td>
                  <td>{transformedChartData[tramo].minConsumo}</td>
                  <td>{transformedChartData[tramo].fechaMinConsumo}</td>
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
