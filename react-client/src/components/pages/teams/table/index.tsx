import { DataTable } from 'primereact/datatable';
import { Avatar } from 'primereact/avatar';
import { Column } from 'primereact/column';
import { ITeam } from '../api';


export default function TeamsTable(props: { teams: Array<ITeam>}) {
    if (!props.teams[0]) return null;
    return (
        <div>
        <div className="card">
          <DataTable value={props.teams} tableStyle={{ minWidth: '50rem' }}>
            {Object.keys(props.teams[0]).map((key) => {
              if (key === 'semel') {
                return (
                  <Column
                    key={key}
                    field={key}
                    header={key}
                    body={(body: ITeam) => (
                      <Avatar image={body.semel} shape="circle" size="large" />
                    )}
                  />
                );
              } else {
                return <Column key={key} field={key} header={key} />;
              }
            })}
          </DataTable>
        </div>
      </div>
    )
} 