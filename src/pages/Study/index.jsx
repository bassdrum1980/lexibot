import classnames from 'classnames';
import { Page } from 'components';
import StudyIntro from 'features/study/StudyIntro/StudyIntro';
import StudyTraining from 'features/study/StudyTraining/StudyTraining';

const Study = () => {
  // if no cards a warning shall be shown on the LoadingWrapper level
  // if study is done -- done for today dialog ('Success' component)
  // if cards and not study isn't in progress -- start dialog
  // if cards and study is in progress -- study dialog

  const studyIsDone = false;
  const studyInProgress = true;
  const cards = [
    {
      word: 'torrid',
      phoneticsText: '/ˈtɒɹɪd/',
      phoneticsAudio: '',
      partOfSpeech: 'adjective',
      definition: 'Very hot and dry.',
      synonyms: [
        {
          value: 'hot\n',
          id: '8pPl4MqjO6NpXQ4_JIoB6',
        },
      ],
      antonyms: [
        {
          value: 'cold',
          id: 'DgL_NEr0eRkzXpakmX1yZ',
        },
      ],
      examples: [
        {
          id: 'D31IPj-R9mOlik1Os_dOV',
          value: [
            {
              value: 'torrid',
              isActive: true,
              id: 'ZMjJFX6pxUXEHYDUJea22',
            },
            {
              value: 'afternoon',
              isActive: true,
              id: 'b2DXjbT923OF4AYVvQYtP',
            },
          ],
        },
      ],
      id: 'bng47837Tu9kArFEQ18N2',
      currentSynonymId: '8pPl4MqjO6NpXQ4_JIoB6',
      currentAntonymId: 'DgL_NEr0eRkzXpakmX1yZ',
      currentExampleId: 'D31IPj-R9mOlik1Os_dOV',
      hints: [
        {
          value: 'comes from the sun',
          id: '5fj8wMV0k7QhMfhOpboyX',
        },
      ],
      currentHintId: '5fj8wMV0k7QhMfhOpboyX',
    },
  ];

  let pageContent, pageModifiers;

  if (cards && !studyInProgress) {
    pageContent = <StudyIntro />;
    pageModifiers = 'page--study-intro page--narrow-padding';
  }
  if (cards && studyInProgress) pageContent = <StudyTraining />;

  return (
    <Page className={classnames('page--study', pageModifiers)}>
      {pageContent}
    </Page>
  );
};

Study.displayName = 'Study Page';

export default Study;
