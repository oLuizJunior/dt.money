import { Summary } from '../Summary/index';
import { TransactionTable } from '../TransactionTable/index';

import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )
}