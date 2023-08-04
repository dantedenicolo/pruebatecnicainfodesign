import {BarList, Card, Title, Flex, Text, Bold } from '@tremor/react';



const BarlistCliente = ({ tramosClienteData }) => {
  // Group data by "Linea" for each type of consumption (Comercial, Industrial, Residencial)
  const comercialData = tramosClienteData.filter(
    (item) => item.TipoConsumo === 'Comercial'
  );
  const industrialData = tramosClienteData.filter(
    (item) => item.TipoConsumo === 'Industrial'
  );
  const residencialData = tramosClienteData.filter(
    (item) => item.TipoConsumo === 'Residencial'
  );

  return (
    <div>
      <div>
        <Card className="max-w-lg">
          <Title>Comercial</Title>
          <Flex className="mt-4">
            <Text>
              <Bold>Linea</Bold>
            </Text>
            <Text>
              <Bold>Perdidas</Bold>
            </Text>
          </Flex>
          <BarList data={getFormattedData(comercialData)} className="mt-2" />
        </Card>
      </div>
      <div>
        <Card className="max-w-lg">
          <Title>Industrial</Title>
          <Flex className="mt-4">
            <Text>
              <Bold>Linea</Bold>
            </Text>
            <Text>
              <Bold>Perdidas</Bold>
            </Text>
          </Flex>
          <BarList data={getFormattedData(industrialData)} className="mt-2" />
        </Card>
      </div>
      <div>
        <Card className="max-w-lg">
          <Title>Residencial</Title>
          <Flex className="mt-4">
            <Text>
              <Bold>Linea</Bold>
            </Text>
            <Text>
              <Bold>Perdidas</Bold>
            </Text>
          </Flex>
          <BarList data={getFormattedData(residencialData)} className="mt-2" />
        </Card>
      </div>
    </div>
  );
};

// Helper function to get unique "Linea" with their total "Perdidas"
const getFormattedData = (data) => {
  const uniqueLines = {};
  data.forEach((item) => {
    if (!uniqueLines[item.Linea]) {
      uniqueLines[item.Linea] = 0;
    }
    uniqueLines[item.Linea] += item.Perdidas;
  });

  // Sort the lines in descending order
  const sortedLines = Object.keys(uniqueLines).sort(
    (lineaA, lineaB) => uniqueLines[lineaB] - uniqueLines[lineaA]
  );

  return sortedLines.map((linea) => ({
    name: linea,
    value: uniqueLines[linea].toFixed(2), // Format to two decimal places
  }));
};

export default BarlistCliente;
