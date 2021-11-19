import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import { 
  getAdministratorsService,
  DeleteAdministratorService
} from '../../services/UserServices';

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

  async function handleDeleteAdministrator(id: string) {
    try {
      await DeleteAdministratorService(id);
      setAdministrators(await getAdministratorsService());

      toast('Administrador removido com sucesso!',
        {
          position: "top-right",
          style: {
            borderRadius: '8px',
            background: '#7bcc39',
            color: '#fff',
          },
        }
      );
    } catch(error: any) {
      console.log(`Error: ${error.message}`);
    }
  };

  function navigateToAddAdminPage() {
    history.push('/administrator/add');
  };

  return(
    <Container>
      <ToastContainer />

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
                  <RemoveIcon 
                    className='fas fa-minus-circle' 
                    onClick={() => handleDeleteAdministrator(administrator._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};