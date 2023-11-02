import { TeamProvider } from './components/TeamProvider';
import Page from './components/Page';
import TeamList from './components/TeamList';
import TeamMemberForm from './components/TeamMemberForm';

const App = () => {
  return (
    <Page>
      <Page.Header>🏅 Team Manager</Page.Header>

      <Page.Content>
        <TeamProvider>
          <TeamList />

          <TeamMemberForm />
        </TeamProvider>
      </Page.Content>
    </Page>
  );
};

export default App;
