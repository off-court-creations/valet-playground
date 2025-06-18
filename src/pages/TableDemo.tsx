// ─────────────────────────────────────────────────────────────────────────────
// src/pages/TableDemoPage.tsx | valet
// Comprehensive live-demo of <Table/> showcasing zebra stripes, hover effects,
// column-dividers, and NEW single / multi-row selection toggles.
// ─────────────────────────────────────────────────────────────────────────────
import { useMemo, useState } from 'react';
import {
  Surface,
  Stack,
  Panel,
  Typography,
  TextField,
  Checkbox,
  IconButton,
  Table,
  useTheme,
} from '@archway/valet';
import type { TableColumn } from '@archway/valet';

/*─────────────────────────────────────────────────────────────────────────────*/
/* Sample-data helpers                                                         */
interface Person {
  id: number;
  name: string;
  age: number;
  city: string;
  join: Date;
}

const CITIES = [
  'Los Angeles',
  'New York',
  'Chicago',
  'Austin',
  'Seattle',
  'Denver',
] as const;

const NAMES = [
  'Ada Lovelace',
  'Grace Hopper',
  'Alan Turing',
  'Katherine Johnson',
  'Linus Torvalds',
  'Margaret Hamilton',
  'Tim Berners-Lee',
] as const;

const rand = <T,>(arr: readonly T[]) => arr[Math.floor(Math.random() * arr.length)];
const makePeople = (n: number): Person[] =>
  Array.from({ length: n }, (_, i) => ({
    id: i + 1,
    name: rand(NAMES),
    age: 18 + Math.floor(Math.random() * 50),
    city: rand(CITIES),
    join: new Date(Date.now() - Math.random() * 2.5e11),
  }));

/*─────────────────────────────────────────────────────────────────────────────*/
/* Demo component                                                              */
export default function TableDemoPage() {
  const { theme, toggleMode } = useTheme();

  /* UI controls ----------------------------------------------------------- */
  const [rows,         setRows]        = useState(50);
  const [striped,      setStriped]     = useState(true);
  const [hoverable,    setHoverable]   = useState(true);
  const [dividers,     setDividers]    = useState(false);
  const [selEnabled,   setSelEnabled]  = useState(false);
  const [multiSelect,  setMultiSelect] = useState(false);

  const [seed, setSeed] = useState(0);      // triggers fresh random data
  const handleRefresh = () => setSeed((s) => s + 1);

  /* Data & columns -------------------------------------------------------- */
  const data = useMemo(() => makePeople(rows), [rows, seed]);

  const columns: TableColumn<Person>[] = useMemo(
    () => [
      { header: 'ID',   accessor: 'id',   align: 'right', sortable: true },
      { header: 'Name', accessor: 'name',                 sortable: true },
      { header: 'Age',  accessor: 'age',  align: 'right', sortable: true },
      { header: 'City', accessor: 'city',                 sortable: true },
      {
        header: 'Joined',
        accessor: 'join',
        align: 'right',
        sortable: true,
        render: (p) =>
          p.join.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }),
      },
    ],
    [],
  );

  /* Derive table-selection mode ------------------------------------------ */
  const selectable =
    selEnabled ? (multiSelect ? 'multi' : 'single') : undefined;

  /* Render ---------------------------------------------------------------- */
  return (
    <Surface>
      <Stack
        spacing="xl"
        style={{
          padding: theme.spacing.lg,
          maxWidth: 1080,
          margin: '0 auto',
        }}
      >
        {/* Header bar ------------------------------------------------------- */}
        <Panel variant="alt" fullWidth>
          <Stack
            direction="row"
            spacing="lg"
            style={{ alignItems: 'center', flexWrap: 'wrap' }}
          >
            <Typography variant="h2" bold>
              Table Demo
            </Typography>
            <div style={{ flex: 1 }} />
            <IconButton
              aria-label="Toggle light/dark"
              icon="mdi:weather-sunny"
              onClick={toggleMode}
            />
          </Stack>
        </Panel>

        {/* Controls --------------------------------------------------------- */}
        <Panel variant="alt" fullWidth>
          <Stack
            direction="row"
            spacing="xl"
            style={{ flexWrap: 'wrap', alignItems: 'flex-end' }}
          >
            <TextField
              as="input"
              type="number"
              name="rows"
              label="Rows"
              min={1}
              max={500}
              value={rows}
              onChange={(e) =>
                setRows(
                  Math.max(
                    1,
                    Math.min(500, Number((e.target as HTMLInputElement).value)),
                  ),
                )
              }
              style={{ width: 120 }}
            />

            <Checkbox
              name="striped"
              checked={striped}
              onChange={(c) => setStriped(c)}
              label="Striped rows"
            />
            <Checkbox
              name="hover"
              checked={hoverable}
              onChange={(c) => setHoverable(c)}
              label="Row hover"
            />
            <Checkbox
              name="lines"
              checked={dividers}
              onChange={(c) => setDividers(c)}
              label="Column dividers"
            />

            <Checkbox
              name="enableSel"
              checked={selEnabled}
              onChange={(c) => {
                setSelEnabled(c);
                if (!c) setMultiSelect(false); // reset multi when disabling
              }}
              label="Enable selection"
            />
            <Checkbox
              name="multiSel"
              checked={multiSelect}
              disabled={!selEnabled}
              onChange={(c) => setMultiSelect(c)}
              label="Multi-select"
            />

            <IconButton
              aria-label="Refresh data"
              icon="mdi:refresh"
              onClick={handleRefresh}
            />
          </Stack>
        </Panel>

        {/* Table ------------------------------------------------------------ */}
        <Panel fullWidth>
          <Table
            data={data}
            columns={columns}
            striped={striped}
            hoverable={hoverable}
            dividers={dividers}
            selectable={selectable}
            initialSort={{ index: 0 }}
            style={{ minWidth: 640 }}
          />
        </Panel>
      </Stack>
    </Surface>
  );
}
