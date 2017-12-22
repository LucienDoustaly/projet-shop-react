<div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Inventaire" value={0} />
          <Tab label="Store" value={1} />
          <Tab label="Panier" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.slide}>
            <div className="container">
              <div className="module">
                <h2 style={styles.headline}>Ajouter un jeu au stock</h2>
                <Form onChangeText={this._set_state.bind(this)} />
                <FlatButton label="Valider" onClick={() => this.props.todos_add_todo({ text: this.state.titre })}/>
              </div>
              <div className="module">
                <h2 style={styles.headline}>Aperçu</h2>
                <Apercu titre={this.state.titre} 
                        prix={this.state.prix} 
                        description={this.state.description} 
                        image={this.state.image}/>
              </div>
            </div>
          </div>
          <div style={styles.slide}>
            <div>
              <ul>
                {
                  this.props.todos.items.map((item) => {
                    return (
                      <li
                        key={item.id}
                      >
                        {
                          item.text
                        }
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div style={styles.slide}>
            
          </div>
        </SwipeableViews>
      </div>