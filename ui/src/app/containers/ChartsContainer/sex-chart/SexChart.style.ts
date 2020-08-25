import styled from 'styled-components';

export const SexChartContainer = styled.div`
    position:relative;
    width:100%;
    display:flex;
    flex-direction:column;
    & .header{
       position:absolute;
       font-size:18px;
       font-weight:700;
       top:10%;
       left:10%;
       & >img{
           padding-bottom:4%;
           padding-left:2%;
       }
    }
    & .chart{
        padding-top:5%;
        display:flex;
        justify-content:center;
    }
    & .sex{
        color:gray;
        font-size:18px;
        & .women{
            display:flex;
            flex-direction:column;
            align-items:center;
            position:absolute;
            bottom:0;
            right:20%;
            & >span{
                color:#1e88e5;
                font-weight:700;
            }
        }
        & .men{
            position:absolute;
            display:flex;
            align-items:center;
            flex-direction:column;
            bottom:0;
            left:20%;
            & >span{
                font-weight:700;
                color:#bbdefb;
            }
        }
    }
`