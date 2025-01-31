import gql from 'fake-tag';

export const UpdateQuestMutation = gql`
  mutation UpdateQuest(
    $id: uuid!
    $input: quest_set_input!
    $skills: [quest_skill_insert_input!]!
    $roles: [quest_role_insert_input!]!
  ) {
    update_quest_by_pk(pk_columns: { id: $id }, _set: $input) {
      id
    }
    delete_quest_skill(where: { questId: { _eq: $id } }) {
      affected_rows
    }
    insert_quest_skill(objects: $skills) {
      affected_rows
      returning {
        questId
        skillId
      }
    }
    delete_quest_role(where: { questId: { _eq: $id } }) {
      affected_rows
    }
    insert_quest_role(objects: $roles) {
      affected_rows
      returning {
        questId
        role
      }
    }
  }
`;
