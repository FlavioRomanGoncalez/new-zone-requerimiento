import { Box, styled } from "@mui/material";

export const StyledDataContainer = styled(Box)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  border: 1px solid #61eb1b;
  border-radius: 5px;
  width: 90vw;
  .Data-Grid {
    background-color: #000;
    color: #fff;
    .MuiDataGrid-cell {
      color: #fff;
      &:hover {
        background-color: #212121;
      }
    }
    .MuiDataGrid-columnHeader,
    .MuiDataGrid-cell {
      border-right: 1px solid #5e625c;
    }
    .MuiDataGrid-columnsContainer,
    .MuiDataGrid-cell {
      border-bottom: 1px solid #5e625c;
    }
  }
`;
