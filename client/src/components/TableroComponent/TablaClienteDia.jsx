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

const ClienteDiaTable = ({ clienteDiaData }) => {
  console.log('ClienteDiaData', clienteDiaData);

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
          <Title> Cliente por día </Title>
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
            ...new Set(clienteDiaData.map((item) => item.Fecha.split('T')[0])),
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
          <SelectItem value="all">Filtrar por Tramo</SelectItem>
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
            <TableHeaderCell className="text-right">
              Consumo Comercial
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Consumo Industrial
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Consumo Residencial
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Perdidas Comercial
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Perdidas Industrial
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Perdidas Residencial
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Costo Comercial
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Costo Industrial
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Costo Residencial
            </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {clienteDiaData
            .filter((item) => isTramosDiaSelected(item))
            .map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.Fecha.split('T')[0]}</TableCell>
                <TableCell>{item.Linea}</TableCell>
                <TableCell className="text-right">
                  {item.consumo_comercial}
                </TableCell>
                <TableCell className="text-right">
                  {item.consumo_industrial}
                </TableCell>
                <TableCell className="text-right">
                  {item.consumo_residencial}
                </TableCell>
                <TableCell className="text-right">
                  {item.perdidas_comercial.toFixed(4)}
                </TableCell>
                <TableCell className="text-right">
                  {item.perdidas_industrial.toFixed(4)}
                </TableCell>
                <TableCell className="text-right">
                  {item.perdidas_residencial.toFixed(4)}
                </TableCell>
                <TableCell className="text-right">
                  $ {Number(item.costo_comercial).toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  $ {Number(item.costo_industrial).toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  $ {Number(item.costo_residencial).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ClienteDiaTable;
