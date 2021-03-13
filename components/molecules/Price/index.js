import { useContext } from "react"
// ui
import { Flex } from "@chakra-ui/layout"
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input"
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/slider"
// context
import { FormContext } from "context"

const Price = () => {
  const { price, setPrice } = useContext(FormContext)

  const handleChange = (value) => setPrice(value)

  const handleFormat = (val) => `$` + val

  const handleParse = (val) => val.replace(/^\$/, "")

  return (
    <Flex direction="column" align="center" justify="center" w="100%">
      <NumberInput
        w="100%"
        maxW="100%"
        variant="filled"
        size="lg"
        onChange={(valueString) => setPrice(handleParse(valueString))}
        value={handleFormat(price)}
      >
        <NumberInputField fontSize="2rem" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        mt="2rem"
        w="90%"
        min={0}
        max={1000}
        step={10}
        focusThumbOnChange={false}
        colorScheme="pink"
        defaultValue={0}
        value={price}
        onChange={handleChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize="sm" boxSize="32px" />
      </Slider>
    </Flex>
  )
}

export default Price
