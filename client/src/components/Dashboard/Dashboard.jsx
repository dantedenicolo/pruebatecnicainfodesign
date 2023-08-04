import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from '@tremor/react';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCliente,
  fetchClienteDia,
  fetchTramos,
  fetchTramosDia,
  fetchTramosCliente,
  selectCliente,
  selectClienteDia,
  selectTramos,
  selectTramosDia,
  selectTramosCliente,
} from '../../redux/store';



import KpiCardGrid from '../TableroComponent/KpiCarfGrid';
import TramosDiaTable from '../TableroComponent/TablaTramoDia'
import ClienteDiaTable from '../TableroComponent/TablaClienteDia';
import GraficoTramosDia from '../TableroComponent/GrafTramosDia';
import KpiCardMaxMinTramoDia from '../TableroComponent/KpiCardMaxMinTramoDia';
import KpiCardMaxMinClienteDia from '../TableroComponent/KpiCardMaxMinClienteDia';
import DonutChartTramos from '../TableroComponent/DonutCharTramos';
import BarlistCliente from '../TableroComponent/BarListCliente';



const Dashboard = () => {

const dispatch = useDispatch();
const tramos = useSelector(selectTramos);
const tramosDia = useSelector(selectTramosDia);
const cliente = useSelector(selectCliente);
const clienteDia = useSelector(selectClienteDia);
const tramosCliente = useSelector(selectTramosCliente);

const fechainicial = '2017-11-15';
const fechafinal = '2017-11-30';

useEffect(() => {
  Promise.all([
    dispatch(fetchTramos({ fechainicial, fechafinal })),
    dispatch(fetchTramosDia({ fechainicial, fechafinal })),
    dispatch(fetchCliente({ fechainicial, fechafinal })),
    dispatch(fetchClienteDia({ fechainicial, fechafinal })),
    dispatch(fetchTramosCliente({ fechainicial, fechafinal })),
  ]).catch((err) => {
    console.error('Error fetching data: ', err);
  });
}, [dispatch]);

console.log('Tramos', tramos);
console.log('Tramos-Dia', tramosDia);
console.log('Cliente', cliente);
console.log('Cliente-Dia', clienteDia);
console.log('Tramos-Cliente', tramosCliente);


  return (
    <main className="px-12 py-12">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
          <Tab>Datos por Dias</Tab>
          <Tab>Datos por Cliente</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              <KpiCardGrid />{' '}
              {/* Aquí se renderiza el componente KpiCardGrid */}
              <div className="h-28" />
            </Grid>
            
            <div className="mt-6">
              <Card>
                <DonutChartTramos tramosData={tramos} />
                <div className="h-96" />
              </Card>
            </div>
            <div className="mt-6">
              <Card>
                <KpiCardMaxMinTramoDia tramosDiaData={tramosDia} />
                <div className="h-96" />
              </Card>
            </div>
            <div className="mt-6">
              <Card>
                <KpiCardMaxMinClienteDia clienteDiaData={clienteDia} />
                <div className="h-96" />
              </Card>
            </div>
            <div className="mt-6">
              <Card>
                <GraficoTramosDia tramosDiaData={tramosDia} />
                <div className="h-80" />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <TramosDiaTable tramosDiaData={tramosDia} />
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <ClienteDiaTable clienteDiaData={clienteDia} />
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <BarlistCliente tramosClienteData={tramosCliente} />
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
};

export default Dashboard;
