import { InformationCircleIcon } from '@heroicons/react/solid'
import { BarList, Card, Title, Flex, Text, Bold, Icon } from '@tremor/react'

const BarlistCliente = ({ tramosClienteData }) => {
  if (!Array.isArray(tramosClienteData)) {
    return null
  }
  // Group data by "Linea" for each type of consumption (Comercial, Industrial, Residencial)
  const comercialData = tramosClienteData.filter(
    item => item.TipoConsumo === 'Comercial'
  )
  const industrialData = tramosClienteData.filter(
    item => item.TipoConsumo === 'Industrial'
  )
  const residencialData = tramosClienteData.filter(
    item => item.TipoConsumo === 'Residencial'
  )

  return (
    <div className='flex flex-row flex-wrap items-center justify-center gap-4'>
      <div className='mt-6'>
        <Card className='w-80' decoration='top' decorationColor='indigo'>
          <Flex //title
            className='space-x-0.5'
            justifyContent='start'
            alignItems='center'
          >
            <Title>Comercial</Title>
            <Icon
              icon={InformationCircleIcon}
              variant='simple'
              tooltip='Perdidas por Linea Comercial'
            />
          </Flex>
          <Flex className='mt-6'>
            <Text>
              <Bold>Linea</Bold>
            </Text>
            <Text>
              <Bold>Perdidas</Bold>
            </Text>
          </Flex>
          <BarList data={getFormattedData(comercialData)} className='mt-2' />
        </Card>
      </div>
      <div className='mt-6'>
        <Card className='w-80' decoration='top' decorationColor='indigo'>
          <Flex //title
            className='space-x-0.5'
            justifyContent='start'
            alignItems='center'
          >
            <Title>Industrial</Title>
            <Icon
              icon={InformationCircleIcon}
              variant='simple'
              tooltip='Perdidas por Linea Comercial'
            />
          </Flex>
          <Flex className='mt-6'>
            <Text>
              <Bold>Linea</Bold>
            </Text>
            <Text>
              <Bold>Perdidas</Bold>
            </Text>
          </Flex>
          <BarList data={getFormattedData(industrialData)} className='mt-2' />
        </Card>
      </div>
      <div className='mt-6'>
        <Card className='w-80' decoration='top' decorationColor='indigo'>
          <Flex //title
            className='space-x-0.5'
            justifyContent='start'
            alignItems='center'
          >
            <Title>Residencial</Title>
            <Icon
              icon={InformationCircleIcon}
              variant='simple'
              tooltip='Perdidas por Linea Comercial'
            />
          </Flex>
          <Flex className='mt-6'>
            <Text>
              <Bold>Linea</Bold>
            </Text>
            <Text>
              <Bold>Perdidas</Bold>
            </Text>
          </Flex>
          <BarList data={getFormattedData(residencialData)} className='mt-2' />
        </Card>
      </div>
    </div>
  )
}

// Helper function to get unique "Linea" with their total "Perdidas"
const getFormattedData = data => {
  const uniqueLines = {}
  data.forEach(item => {
    if (!uniqueLines[item.Linea]) {
      uniqueLines[item.Linea] = 0
    }
    uniqueLines[item.Linea] += item.Perdidas
  })

  // Sort the lines in descending order
  const sortedLines = Object.keys(uniqueLines).sort(
    (lineaA, lineaB) => uniqueLines[lineaB] - uniqueLines[lineaA]
  )

  return sortedLines.map(linea => ({
    name: linea,
    value: uniqueLines[linea].toFixed(2) // Format to two decimal places
  }))
}

export default BarlistCliente
