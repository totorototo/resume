import React, { forwardRef } from "react";
import styled from "styled-components";
import {
  border,
  compose,
  flexbox,
  layout,
  position,
  space,
  variant,
} from "styled-system";
import { Box } from "../box";
import { Flex } from "../flex";
import { Spinner } from "../spinner";
import { focusRing } from "../shared-styles";

const defaultButtonStyles = {
  position: "relative",
  fontFamily: "body",
  fontSize: 2,
  fontWeight: "regular",
  lineHeight: "copy",
  borderRadius: 0,
  borderWidth: 2,
  borderStyle: "solid",
  padding: 3,
  ml: 0,
  mr: 0,
  mb: 0,
  appearance: "none",
};

const buttonVariants = variant({
  variants: {
    command: {
      ...defaultButtonStyles,
      borderWidth: 0,
      bg: "transparent",
      borderColor: "transparent",
      borderStyle: "none",
      svg: {
        color: "ui.secondary",
      },
      "&:hover": {
        svg: {
          color: "highlights.primaryHighlight",
        },
      },
    },
    primary: {
      ...defaultButtonStyles,
      bg: "brand.primary",
      color: "text.inverse",
      borderColor: "transparent",
      " svg": {
        color: "text.inverse",
      },
      "&:hover": {
        backgroundColor: "highlights.primaryHighlight",
      },
      "&:active, &:focus": {
        backgroundColor: "highlights.primaryExtraHighlight",
      },
      "&:disabled": {
        color: "text.disabled",
        backgroundColor: "ui.disabled",
        borderColor: "ui.disabled",
      },
    },
    secondary: {
      ...defaultButtonStyles,
      bg: "bg.primary",
      color: "brand.primary",
      borderColor: "brand.primary",
      " svg": {
        color: "brand.primary",
      },
      "&:hover": {
        borderColor: "highlights.primaryHighlight",
      },
      "&:active, &:focus": {
        borderColor: "highlights.primaryExtraHighlight",
      },
      "&:disabled": {
        color: "text.disabled",
        backgroundColor: "bg.primary",
        borderColor: "ui.disabled",
      },
    },
    transparent: {
      ...defaultButtonStyles,
      bg: "transparent",
      color: "brand.primary",
      borderColor: "transparent",
      " svg": {
        color: "brand.primary",
      },
      "&:hover": {
        backgroundColor: "highlights.bgHighlight",
      },
      "&:active, &:focus": {
        backgroundColor: "highlights.bgHighlight",
      },
      "&:disabled": {
        color: "text.disabled",
        backgroundColor: "ui.disabled",
        borderColor: "ui.disabled",
      },
    },
  },
});

const ButtonIcon = styled(Box)`
  display: inline-block;
  width: ${(props) => props.theme.fontSizes[4]};
  height: ${(props) => props.theme.fontSizes[4]};
  svg {
    position: absolute;
    display: block;
    font-size: ${(props) => props.theme.fontSizes[4]};
  }
`;

const StyledButton = styled.button`
  ${buttonVariants}
  ${compose(space, layout, flexbox, border, position)}

  &:focus {
    ${focusRing}
  }
`;

export const Button = forwardRef(
  (
    {
      leftIcon,
      rightIcon,
      disabled,
      isLoading,
      children,
      mb,
      mt,
      mx,
      my,
      ml,
      mr,
      ...props
    },
    ref
  ) => (
    <StyledButton
      ref={ref}
      py={[1, 2]}
      disabled={disabled}
      isLoading={isLoading}
      {...props}
      mx={mx}
      my={my}
      mb={mb}
      mt={mt}
      ml={ml}
      mr={mr}
    >
      {isLoading && (
        <Spinner
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          size={4}
        />
      )}
      <Flex
        alignItems="center"
        position="relative"
        justifyContent="center"
        opacity={isLoading ? 0 : 1}
      >
        {leftIcon && <ButtonIcon disabled={disabled}>{leftIcon}</ButtonIcon>}
        {children}
        {rightIcon && (
          <ButtonIcon disabled={disabled} ml={2}>
            {rightIcon}
          </ButtonIcon>
        )}
      </Flex>
    </StyledButton>
  )
);

Button.defaultProps = {
  variant: "primary",
};
