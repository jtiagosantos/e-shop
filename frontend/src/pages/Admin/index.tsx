import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getAdministratorsService } from '../../services/UserServices';

import Navbar from '../../components/Navbar';

import { 
  Container, 
  TopAdmin, 
  Title, 
  IconAddAdmin,
  HorizontalLine,
  Table,
  RemoveIcon
} from './styles';

type AdministratorProps = {
  _id: string,
  name: string,
  email: string,
};

export default function Admin(): JSX.Element {
  const [administrators, setAdministrators] = useState<AdministratorProps[]>([]);

  const history = useHistory();

  useEffect(() => {
    async function getAdministrators() {
      const data = await getAdministratorsService();
      setAdministrators(data);
    };

    getAdministrators();
  }, []);

  function navigateToAddAdminPage() {
    history.push('/administrator/add');
  };

  return(
    <Container>
      <Navbar showOnlyTitle={true} />

      <TopAdmin>
        <Title>Adminstrador(es)</Title>
        <IconAddAdmin className='fas fa-user-plus' onClick={navigateToAddAdminPage} />
      </TopAdmin>
      <HorizontalLine />

      {administrators.length > 0 && (
        <Table className='table table-hover'>
          <thead>
            <tr>
              <th scope="col">Nome de adminstrador</th>
              <th scope="col">E-mail de adminstrador</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {administrators.map(administrator => (
              <tr key={administrator._id}>
                <td>{administrator.name}</td>
                <td>{administrator.email}</td>
                <td>
                  <RemoveIcon className='fas fa-minus-circle' />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};