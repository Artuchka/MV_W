export const TheoryMVС = () => {


  return (
      <div className="theory">
        <h1>теория по mvc</h1>
        <div className="layer-description">
          <h5>описание слоев mvC</h5>

          <ol>
            <li>Model. стейт приложения + бизнес логика; содержит структуры данных, операции над ними, оповещает слушателей об изменениях; example = Redux</li>
            <li>View. отображение + интерактивный интерфейс для юзера. компонент получает пропсы от модели. </li>
            <li>Controller. посредник между моделью и вью. обрабатывает взаимодействие с юзером (при получении event'а триггерит методы модели). обновляет model, view. </li>
          </ol>

        </div>
        <div className="diff-description">
          <h5>Различия MVС с MVI</h5>
          <ol className={"d-flex flex-column gap-3"}>
              <li className={"row text-center"}>
                  <div className="col py-2 border border-light border-3">
                    однонаправленность в mvi (User Action as Intent)
                  </div>
                  <div className="col py-2 border border-light border-3">
                    двунаправленность в mvc (Controller поддерживает взаимодействия между Model и View)
                  </div>
              </li>
              <li className={"row text-center"}>
                  <div className="col py-2 border border-light border-3">
                    в mvi акцентируется на реактивном программировании
                  </div>
                  <div className="col py-2 border border-light border-3">
                    mvc более "событийно-ориентированная" архитектура
                  </div>
              </li>
              <li className={"row text-center"}>
                  <div className="col py-2 border border-light border-3">
                    mvi - более развитый mvc, т.к. разделяет Model и View с помощью Intent'ов.
                  </div>
              </li>
          </ol>
        </div>
      </div>
  )
}
