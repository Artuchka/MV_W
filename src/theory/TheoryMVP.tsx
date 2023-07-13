export const TheoryMVP = () => {


  return (
      <div className="theory">
        <h1>теория по mvP</h1>
        <div className="layer-description">
          <h5>описание слоев mvP</h5>

          <ol>
            <li>Model. стейт приложения + бизнес логика; ответсвенность за валидацию, управление, восстановаление стейта</li>
            <li>View. отображение. компонент получает пропсы от модели. сообщает presenter'у о взаимодействии юзера </li>
            <li>
              <span>
                Controller. посредник между моделью и вью.
              </span>
              <br/>
              <span>
                извлекает данные из Model {"->"} обновляет view.
              </span>
              <br/>
              <span>
                обрабатывает взаимодействие с юзером (при получении event'а триггерит методы модели) {"->"} обновляет model.
              </span>
            </li>
          </ol>

        </div>
      </div>
  )
}
