import { Container } from "./styles"
import { Summary } from "../Summary"
import { ConversionCards } from "../ConversionCards"

export function Dashboard () {
    return (
        <Container>
            <Summary />
            <ConversionCards />
        </Container>
    )
}