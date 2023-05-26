"""create nut.favorites table

Revision ID: a4954a45102a
Revises: 0cce0c61a294
Create Date: 2023-05-25 17:50:27.507911

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a4954a45102a'
down_revision = '0cce0c61a294'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'favorites',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('subject', sa.String(length=127), nullable=False),
        sa.Column('url', sa.String(length=255), nullable=False),
        sa.Column('resource_type', sa.String(length=255), nullable=False),
        sa.Column('resource_id', sa.Integer, nullable=False),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_favorites_user_url', 'favorites',
                    ['user_id', 'url'], unique=True)
    op.create_index('idx_favorites_resource_type',
                    'favorites', ['resource_type'])
    op.create_index('idx_favorites_subject', 'favorites', ['subject'])
    op.create_index('idx_favorites_url', 'favorites', ['url'])


def downgrade() -> None:
    op.drop_table('favorites')
