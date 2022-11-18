import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import DemoContent from '@fuse/core/DemoContent';
import {Stack, TextField, Typography} from "@mui/material";
// import Button from 'app/shared-components/Button/Button';
import {message} from './test'

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

function ExamplePage(props) {
  const { t } = useTranslation('examplePage');

  return (
    <Root
      header={
        <div className="p-24">
          <h4>{t('TITLE')}</h4>
        </div>
      }
      content={
        <div className="p-24">
          {/*<Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et facere laborum molestias officiis provident quaerat, repellat ut. Accusamus exercitationem incidunt nemo nihil non quos sapiente soluta voluptatum! Et, minus nobis.</Typography>

          <Stack spacing={2} sx={{mt: 2}}>

            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />

            <Stack spacing={2} direction="row" alignItems="flex-start">
              <Button variant="contained" color="primary">Primary</Button>
              <Button variant="contained" color="secondary">Secondary</Button>
              <Button variant="contained" color="info">Info</Button>
              <Button variant="contained" color="success">Success</Button>
              <Button variant="contained" color="warning">Warning</Button>
              <Button variant="contained" color="error">Error</Button>
              <Button variant="contained" color="inherit">Inherit</Button>
            </Stack>

            <Stack spacing={2} direction="row" alignItems="flex-start">
              <Button size="small" variant="text" color="primary">Primary</Button>
              <Button size="small" variant="text" color="secondary">Secondary</Button>
              <Button size="small" variant="text" color="info">Info</Button>
              <Button size="small" variant="text" color="success">Success</Button>
              <Button size="small" variant="text" color="warning">Warning</Button>
              <Button size="small" variant="text" color="error">Error</Button>
              <Button size="small" variant="text" color="inherit">Inherit</Button>
            </Stack>

            <Stack spacing={2} direction="row" alignItems="flex-start">
              <Button size="small" variant="outlined" color="primary">Primary</Button>
              <Button size="small" variant="outlined" color="secondary">Secondary</Button>
              <Button size="small" variant="outlined" color="info">Info</Button>
              <Button size="small" variant="outlined" color="success">Success</Button>
              <Button size="small" variant="outlined" color="warning">Warning</Button>
              <Button size="small" variant="outlined" color="error">Error</Button>
              <Button size="small" variant="outlined" color="inherit">Inherit</Button>
            </Stack>


            <Stack spacing={2} direction="row" alignItems="flex-start">
              <Button size="small" variant="bordered" color="primary">Primary Bordered</Button>
              <Button size="small" variant="bordered" color="secondary">Secondary</Button>
              <Button size="small" variant="bordered" color="info">Info</Button>
              <Button size="small" variant="bordered" color="success">Success</Button>
              <Button size="small" variant="bordered" color="warning">Warning</Button>
              <Button size="small" variant="bordered" color="error">Error</Button>
              <Button size="small" variant="bordered" color="inherit">Inherit</Button>
            </Stack>

            <Stack spacing={2} direction="row" alignItems="flex-start">
              <Button size="small" variant="soft" color="primary">Primary Soft</Button>
              <Button size="small" variant="soft" color="secondary">Secondary</Button>
              <Button size="small" variant="soft" color="info">Info</Button>
              <Button size="small" variant="soft" color="success">Success</Button>
              <Button size="small" variant="soft" color="warning">Warning</Button>
              <Button size="small" variant="soft" color="error">Error</Button>
              <Button size="small" variant="soft" color="inherit">Inherit</Button>
            </Stack>

            <Stack spacing={2} direction="row" alignItems="flex-start">
              <Button size="small" variant="outlined" color="primary">Primary</Button>
              <Button size="small" variant="outlined" color="secondary">Secondary</Button>
              <Button size="small" variant="outlined" color="info">Info</Button>
              <Button size="small" variant="outlined" color="success">Success</Button>
              <Button size="small" variant="outlined" color="warning">Warning</Button>
              <Button size="small" variant="outlined" color="error">Error</Button>
              <Button size="small" variant="outlined" color="inherit">Inherit</Button>
            </Stack>

            <Stack spacing={2} direction="row" alignItems="flex-start">
              <Button size="small" variant="contained" color="primary">Primary</Button>
              <Button size="small" variant="contained" color="secondary">Secondary</Button>
              <Button size="small" variant="contained" color="info">Info</Button>
              <Button size="small" variant="contained" color="success">Success</Button>
              <Button size="small" variant="contained" color="warning">Warning</Button>
              <Button size="small" variant="contained" color="error">Error</Button>
              <Button size="small" variant="contained" color="inherit">Inherit</Button>
            </Stack>
          </Stack>*/}


        </div>
      }
      scroll="content"
    />
  );
}

export default ExamplePage;
