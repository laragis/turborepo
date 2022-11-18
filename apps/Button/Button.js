import {Button as MuiButton} from "@mui/material";
import {alpha, styled} from "@mui/material/styles";
import {green} from "@mui/material/colors";

const StyledButton = styled(MuiButton, {
    shouldForwardProp: (prop) => prop !== 'rounded',
})(({theme, variant, color, rounded}) => {
    return ({
        ...(rounded && {
            borderRadius: 9999
        }),

        ...(variant === 'bordered' &&
          color !== 'inherit' && {
              border: `1px solid ${(theme.vars || theme).palette[color].main}`,
              // backgroundColor: theme.vars
              //     ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`
              //     : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
              // Reset on touch devices, it doesn't add specificity
              // '@media (hover: none)': {
              //     backgroundColor: 'transparent',
              // },
          }),

        ...(variant === 'soft' && {

        }),
    })
})

function Button(props) {
    return <StyledButton {...props}/>
}

export default Button