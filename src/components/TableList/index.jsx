import { DataGrid } from "@mui/x-data-grid"
import { StyledDataContainer } from "./components/StyledContainer"
import { ThemeProvider, createTheme } from "@mui/material"
import columns from "./utils/columns"


const TableListComponent = () => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <StyledDataContainer>
        <DataGrid
          className="Data-Grid"
          rows={[{ id: 1, col1: "Hello", col2: "World" }]}
          columns={columns}
        />
      </StyledDataContainer>
    </ThemeProvider>
  )
}

export default TableListComponent