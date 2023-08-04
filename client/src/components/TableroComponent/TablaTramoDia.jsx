import {
  Icon,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  Title,
  Flex,
  Select,
  SelectItem,
  MultiSelect,
  MultiSelectItem,
} from '@tremor/react';
import { InformationCircleIcon } from '@heroicons/react/solid';
import { useState } from 'react';

const TramosDiaTable = ({ tramosDiaData }) => {
  console.log('TramosDiaData', tramosDiaData);

  const [selectedLinea, setSelectedLinea] = useState('all');
  const [selectedFecha, setSelectedFecha] = useState([]); 
  

  const isTramosDiaSelected = (item) =>
    (item.Linea === selectedLinea || selectedLinea === 'all') &&
    (selectedFecha.includes(item.Fecha) || selectedFecha.length === 0);

  return (
    <>
      <div>
        <Flex
          className="space-x-0.5"
          justifyContent="start"
          alignItems="center"
        >
          <Title> Tramos por día </Title>
          <Icon
            icon={InformationCircleIcon}
            variant="simple"
            tooltip="Shows sales performance per employee"
          />
        </Flex>
      </div>
      <div className="flex space-x-2">
        <MultiSelect
          className="max-w-full sm:max-w-xs"
          onValueChange={setSelectedFecha}
          placeholder="Select Fecha..."
        >
          {[
            ...new Set(tramosDiaData.map((item) => item.Fecha.split('T')[0])),
          ].map((fecha, index) => (
            <MultiSelectItem key={index} value={fecha}>
              {fecha}
            </MultiSelectItem>
          ))}
        </MultiSelect>
        <Select
          className="max-w-full sm:max-w-xs"
          defaultValue="all"
          onValueChange={setSelectedLinea}
        >
          <SelectItem value="all">Todos los item</SelectItem>
          <SelectItem value="Tramo 1">Tramo 1</SelectItem>
          <SelectItem value="Tramo 2">Tramo 2</SelectItem>
          <SelectItem value="Tramo 3">Tramo 3</SelectItem>
          <SelectItem value="Tramo 4">Tramo 4</SelectItem>
          <SelectItem value="Tramo 5">Tramo 5</SelectItem>
        </Select>
      </div>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Fecha</TableHeaderCell>
            <TableHeaderCell>Tramos</TableHeaderCell>
            <TableHeaderCell className="text-right">Consumo</TableHeaderCell>
            <TableHeaderCell className="text-right">Perdidas</TableHeaderCell>
            <TableHeaderCell className="text-right">Costo</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Costo Total Consumo
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Costo Total Perdidas
            </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tramosDiaData
            .filter((item) => isTramosDiaSelected(item))
            .map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.Fecha.split('T')[0]}</TableCell>
                <TableCell>{item.Linea}</TableCell>
                <TableCell className="text-right">{item.consumo}</TableCell>
                <TableCell className="text-right">
                  {item.perdidas.toFixed(4)}
                </TableCell>
                <TableCell className="text-right">
                  $ {Number(item.costo).toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  $ {item.costo * item.consumo}
                </TableCell>
                <TableCell className="text-right">
                  $ {(item.costo * item.perdidas).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TramosDiaTable;
