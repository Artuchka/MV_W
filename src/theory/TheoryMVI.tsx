export const TheoryMVI = () => {


  return (
      <div className="theory">
        <h1>теория по mvi</h1>
        <div className="layer-description">
          <h5>описание слоев mvi</h5>
          <ol>
            <li>Model. Модель представляет текущее состояние приложения. Модель предоставляет методы обновления состояния,
              через intent'ы (намерения или action.type из Redux \ Flux архитектура)</li>
            <li>View. Вью отвечает за рендер интерфейса для пользователя и отображение текущего состояния пользователю. Вью - пассивный компонент,
              который получает обновления от Модели и триггерит Intent'ы при взаимодействии с пользователем</li>
            <li>
              Intent. интент = представление действий или намерений пользователя.
              интент заключает в себя события(event) и всякий user input и представляет их в виде осмысленных объектов.
              Intent посылает эти намерения юзера в Модель
            </li>
          </ol>
        </div>
        <div className="diff-description">
          <h5>Различия MVI с MV*</h5>
          <ol>

            <li>
              <h6>MVC:</h6>
              <ul>
                <li>Model представляет текущее состояние приложение и бизнес логику.</li>
                <li>View ТОЛЬКО отображает</li>
                <li>Controller обрабатывает взаимодействие с пользователем. обновляет Model, View</li>
              </ul>
              <strong>
                в mvi за взаимодействие с юзером отвечет Intent, а в mvc Controller
              </strong>
            </li>

            <li>
              <h6>MVVM:</h6>
              <ul>
                <li>Model представляет текущее состояние приложение и бизнес логику.</li>
                <li>View ТОЛЬКО отображает</li>
                <li>ViewModel обрабатывает взаимодействие с пользователем (). обновляет Model, View.</li>
              </ul>
              <strong>
                MVVM focuses on two-way data binding between the View and ViewModel.
                The ViewModel служит как посредник который изолирует View от Model.
                ViewModel занимается логикой по взаимодействию с юзером.
                MVI, наоборот, использует unidirectional data flow и явно определяет действия с юзером через Intent'ы.
              </strong>
            </li>

            <li>
              <h6>MVP:</h6>
              <ul>
                <li>Model представляет текущее состояние приложение</li>
                <li>View ТОЛЬКО отображает</li>
                <li>Presenter обрабатывает взаимодействие с пользователем. обновляет View, используя Model.</li>
              </ul>
              <strong>
                в MVP Presenter выступает как посредник между Model и View.
                Presenter получает от юзера входные данные через View, обрабатывает используя Model, обновляет View соответсвенно.
                MVI отличается наличием Intents, которые выражают действия юзера явным образом, и которые рассоединяют Model и View от прямого взаимодействия.
              </strong>
            </li>


          </ol>
        </div>
      </div>
  )
}
