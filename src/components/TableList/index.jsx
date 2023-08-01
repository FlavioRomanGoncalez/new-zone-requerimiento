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
          rows={[{ id: 2, name: "Hello", enterprice: "World",state:true },{ id: 1, name: "Hello", enterprice: "World" }]}
          columns={columns}
          columnVisibilityModel={{
            id:false
          }}
          
        />
      </StyledDataContainer>
    </ThemeProvider>
  )
}

export default TableListComponent