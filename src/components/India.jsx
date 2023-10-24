import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Image,
} from "@chakra-ui/react";
import unityImage from "../images/unity-1.png";
import axisImage from "../images/axisbank-1.png";
import arthmateImage from "../images/arthmate-1.png";
import homeFirstImage from "../images/homefirst-1.png";
import moneyWideImage from "../images/moneywide-1.png";
import kreditImage from "../images/kredtibee-1.png";
import loanImage from "../images/loantrap-1.png";

function India() {
  return (
    <>
      <Text fontSize="5xl" color="blue.600" align={"center"}>
        Lending Partner
      </Text>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Partners</Th>
              <Th>Loan Products</Th>
              <Th>Website Link</Th>
              <Th>Nodal Officer</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Image src={unityImage} />
              </Td>
              <Td>Business Loans</Td>
              <Td>
                <a href="https://theunitybank.com/msme-loans.html">
                  View Website
                </a>
              </Td>
              <Td>
                Ms. Rashmi Pandit
                <br />
                Email: level2escalation@unitybank.co.in
                <br />
                Phone: 022 42159000
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Image src={arthmateImage} />
              </Td>
              <Td>Business Loans</Td>
              <Td>
                <a href="https://www.arthmate.com/">View Website</a>
              </Td>
              <Td>
                Mr. Yogesh Rohilla
                <br />
                Email: statutory.compliance@arthmate.com
                <br />
                Phone: +91 – 7835009643
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Image src={homeFirstImage} />
              </Td>
              <Td>Secured Loans</Td>
              <Td>
                <a href="https://homefirstindia.com/features/">View Website</a>
              </Td>
              <Td>
                Mr. Gaurav Mohta (Grievance Redressal Officer)
                <br />
                Email: complaints@homefirstindia.com
                <br />
                Phone: 8880549911
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Image src={axisImage} />
              </Td>
              <Td>
                Personal Loans, Two-Wheeler Loans, Rolling Short Term Business
                Loans
              </Td>
              <Td>
                <a href="https://www.axisbank.com/business-banking/supply-chain-finance">
                  View Website
                </a>
              </Td>
              <Td>
                Mr. Parag Deshpande
                <br />
                Email: PNO@axisbank.com
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Image src={moneyWideImage} />
              </Td>
              <Td>Personal Loans</Td>
              <Td>
                <a href="https://www.moneywide.com/personal-loan">
                  View Website
                </a>
              </Td>
              <Td>
                Mr. Mohit Gulati
                <br />
                Email: gro@moneywide.com
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Image src={kreditImage} />
              </Td>
              <Td>Personal Loans</Td>
              <Td>
                <a href="https://www.kreditbee.in/personal-loan-for-self-employed">
                  View Website
                </a>
              </Td>
              <Td>
                Ms. Meghana Shah
                <br />
                Email: help@kreditbee.in
                <br />
                Phone: 080-44292200 / 080-68534522
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Td>
                <Image src={loanImage} />
              </Td>
              <Th>Business Loans</Th>
              <Td>
                <a href="https://loantap.in/msme-business-loan/">
                  View Website
                </a>
              </Td>
              <Td>
                Asifa Hussain
                <br />
                Email: cs.fintech@loantap.in
                <br />
                Phone: 020 – 4852 1017
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}

export default India;
